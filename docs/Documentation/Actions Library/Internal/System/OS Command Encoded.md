# OS Command Encoded

Single-line Operating System (OS) command with string encode.

&gt; **Properties**
&gt; 

**Command**:           operating system command

&gt; **Output**
&gt; 

**Output-location**: Location to store the output data

**Example**

There are 3 ways to run multiple shell commands in one line:

1. Use ;

No matter the first command cmd1 run successfully or not, always run the second command cmd2:

$ cd ~/Documents; ls

no matter cd to ~/Documents successfully, run ls

1. Use &&

Only when the first command cmd1 run successfully, run the second command cmd2:

$ cd ~/Documents && ls

run ls only after cd to ~/Documents

1. Use ||

Only when the first command cmd1 failed to run, run the second command cmd2:

$ cd ~/Documents || ls

if failed cd to ~/Documents, ls will run

### ● **Product Info**

Returns current product info. Returns “name” and “version”.

Output

Output-location: Location to store the output data