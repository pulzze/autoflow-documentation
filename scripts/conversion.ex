defmodule Conversion do
  def run (path \\ pwd) do
    path
      |> File.ls!()
      # Put directories first
      |> Enum.sort_by(&(File.dir?(&1)), :desc)
      |> Enum.each(fn oldFilename ->
        oldFile = path |> Path.join(oldFilename)
        if File.exists?(oldFile) do
          newFilename = oldFilename |> strip_filename()
          newFile = path |> Path.join(newFilename)
          if (oldFile != newFile), do: File.rename!(oldFile, newFile)
          if File.dir?(newFile) do
            create_index_file(oldFile, newFile, oldFilename)
            run(newFile)
          else
            content = newFile
              |> File.read!()
              |> strip_content()
              |> replace_angle_brackets()
            if String.valid?(content) do
              File.write!(newFile, content)
            end
          end
        end
      end)
  end

  def strip_filename(string) do
    String.replace(string, ~r/\s[a-z0-9]{32,32}/, "")
  end
  def strip_content(string) do
    string
      |> String.replace(~r/%20[a-z0-9]{32,32}/, "")
      |> String.replace(~r/\.md\)/, ")")
  end

  def replace_angle_brackets(string) do
    string
      |> String.replace("<", "&lt;")
      |> String.replace(">", "&gt;")
  end

  def create_index_file(oldFile, newFile, oldFilename) do
    # If index file exists, convert to Index.md
    index_file = oldFile <> ".md"
    if File.exists?(index_file) do
      ref = oldFilename |> String.replace(" ", "%20")
      content = File.read!(index_file)
        |> String.replace("](", "](../")
        |> String.replace("](../#{ref}/", "](")
      File.write!(Path.join(newFile, "Index.md"), content)
      File.rm(index_file)
    end
  end
end
