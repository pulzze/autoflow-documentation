# Multipart Request

Make HTTP multipart request.

&gt; **Properties**
&gt; 

**url**:                           Address for the Request to be sent

**path**:                        Path of the request. You can use "{variable-name}" syntax to create variable placeholders

**url-variables**:         Variable url path values in an object of key value pairs

**type**:                       Type of HTTP request to use for sending form data

**Multipart**:               List of part objects with keys

**type**:                        Form or file

**key**:                         Part key if of type form

**value**:                      Part value if of type form

**filepath**:                  Part filepath if of type file

**keyname**:                Part keyname if of type file. Defaults to "uploaded_file"

**filename**:                 Part filename if of type file. Defaults to filename from basename of filepath

**header**:                   Value to include in the header

**query**:                     Query to the server

**timeout**:                  Duration to make attempt

&gt; **Output**
&gt; 

**output-location**: Location to store the output data