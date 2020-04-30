# shujiang
Usage: 
1, run "python receive\_check.py" to start the server

2, run "python -m SimpleHTTPServer 9876" to start the html server

3, visit "127.0.0.1:9876/set.html". This html will stay 10 seconds and send the finished signal

4, visit "127.0.0.1:9876/check.html" within 10 seconds after set.html is started

When set.html is finished, check.html will show "finished"
