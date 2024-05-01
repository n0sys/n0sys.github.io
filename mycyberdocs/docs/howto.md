# HowTos

## Python

- Relative imports:
	- Add init py files
 	- Create setup.py in root directory (setup.py and PACKAGE in same dir)
    
		```
		from setuptools import setup, find_packages
  
		setup(name='SalesBusters', version='1.0', packages=find_packages())
		```
   	- Create venv and activate it : `python3 -m venv my.venv && ./my.venv/scripts/activate`
   	- Run this command in root dir : `pip install .`
   	- Now you can `import PACKAGE`
- Python to exe:

	```Python
	PyInstaller.__main__.run([
			'script.py',
			'--onefile',
			'--windowed'
		])
	```
- Python temp dir: `tempfile.mkdtemp()`
- Async with threading and queue:
	```Python
	import threading, queue

	def func(i, q):
		print(f"Running func {i}")
		q.put("result send to the q when function exec done")

	q = queue.Queue()
	thread = threading.Thread(target=func, args=(i, q)
	thread.daemon = True
	thread.start()

	res = q.get()
	print(res)
	```

## Linux Commands

- Add arguments to bash scripts:
	```bash
	while getopts "h:n:" opt; do
	    case $opt in
	        h) HOST="$OPTARG";;
	        n) NAME="$OPTARG";;
	    esac
	done
	
	if [ -z "$HOST" ] || [ -z "$NAME" ]; then
	        echo 'Missing -h or -n args' >&2
	        exit 1
	fi
	```
- Fetch and save website recursively : `wget -r -np -k https://SITE`
- SSH tunnel : `ssh -N -L 8080:10.0.0.14:80 kali@161.105.209.172`
- Execute shell file : `$0 FILE.sh`
- Show file contents : `nl `
- Send file content in request : `curl -d "@LOCAL_FILE"`
- PHP Local Test Server : `php -S 127.0.0.1:8000`
- Avoid variable premature evaluation : `use ' instead of "`
- Send file through ssh : `scp [user@]SRC_HOST:]file1 [user@]DEST_HOST:]file2`
- Capture network traffic : `sudo tcpdump -SX -i INTERFACE tcp port 389`
- Remove chars from string : 
	- `echo string | tr -dc a-z0-9 (Only keep a-z and 0-9)`
	- `echo string | tr -d '\n' (remove all \n and keep the rest)`
- Get hex value only : `xxd -p FILE`
- Decrypt files : `openssl enc -ALGO -d -in INFILE -out OUTFILE`
- Change keyboard layout : `setxkbmap fr`
- Text to hex : `python3 pwntools`
- Beautify JSON : `echo JSON | jq`
- Grep recursive : `grep -rwn PATH -e PATTERN`
- Receive data : 
	- nc :
		- `nc -lvnp PORT`
		- `echo "hello" | nc IP PORT`
	- php server :
		- `a=$(echo 1); curl http://server?c=$a`
- View open ports :
	- `netstat`
	- `ss`
	- `services list`
- View symlink source : `readlink -f`
- Execute command on found files : `find . -exec cat {} \;`
- Use output as args : `| xargs CMD`
- Search for pattern in files : `ag -i PATTERN /`      (silversearcher-ag)
- Append FILE : `echo 1 | tee -a FILE`
- Cut output : `| cut -d DELIMITER -f FIELD`
- Test String equal : `if [ "$c" = "$d" ]; then`
- Switch to root :
  	- `sudo -s`
  	- `su -`
- Add user to sudoers : `usermod -a -G sudo USER`

## Hashcat 

- Mask Attack : `hashcat -mMODE -a 3 'hash' -1 ?l?d?s?u ?1?1?1?1?1?1 -O -w 3`
- Dictionnary attack : `hashcat -m1000 'hash' wordlist -r rule --force --potfile-disable -o cracked.txt`

## Powershell

- Find all files : `gci -recurse -filter "*.pfx" -erroraction 'silentlycontinue'`
- Grep pattern : `Select-String -Pattern 'PATTERN'`
- Tree : `Tree /F`
- Create powershell session :
	``` powershell
	$username = "domain\adminsystem" ; $pw = "yyy";
	$password = $pw | ConvertTo-SecureString -AsPlainText -Force;
	$cred = New-Object System.Management.Automation.PSCredential -ArgumentList $username, $password;
	New-PSSession -Credential $cred;
	```
- Sleep : `Start-Sleep 1`
- Create file : `New-Item PATH`
- Open file : `Invoke-Item PATH`
- Delete file : `Remove-Item PATH`
- Delete Directory : `Remove-Item -Recurse dirPATH`
- Execute command from ps1 : `& cmd`
- Get number of line in output : `| Measure-Object -Line`
- Get current directory : `Get-Location`
- Change directory : `Push-Location $dir`
- Go to old directory : `Pop-Location`
- Create powershell shortcut : `C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -command "& 'PATH'"`
- Run script as administrator in ps1:
	```powershell
	if (-NOT ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator"))  
	{  
	  $arguments = "& '" +$myinvocation.mycommand.definition + "'"
	  Start-Process powershell -Verb runAs -ArgumentList $arguments
	  Break
	}
	```

## Django

- Setup : [Link](https://docs.djangoproject.com/en/4.2/intro/tutorial01/)
- Deploy guide : [Link](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Deployment)
- Templating guide : [Link](https://docs.djangoproject.com/en/4.2/ref/templates/language/)
- Dynamic routes : [Link](https://docs.djangoproject.com/en/5.0/topics/http/urls/)
- Overwrite admin templates : [Link](https://docs.djangoproject.com/en/4.2/ref/contrib/admin/#overriding-admin-templates)
- Bootstrap docs : [Link](https://getbootstrap.com/docs/5.3/)

### Start

- Install django : `pip install django`
- Create project : `django-admin startproject PROJ`
- Create app : `django-admin startapp APP`
- Add APP to settings.py INSTALLED_APPS
- Install django environ : `pip install django-environ`
- Create .env file in settings.py directory
- Edit settings.py for postgres db :
	```
	import environ
	
	env = environ.Env()
	environ.Env.read_env()
	
	SECRET_KEY = env("SECRET_KEY")
	
	'ENGINE': 'django.db.backends.postgresql_psycopg2',
	DATABASES = {
	    'default': {
	        'ENGINE': 'django.db.backends.postgresql_psycopg2',
	        'NAME': env("DB_NAME"),
	        'USER': env("DB_USER"),
	        'PASSWORD': env("DB_PASSWORD"),
	        'HOST': env("DB_HOST"),
	        'PORT': env("DB_PORT"),
	    }
	}
	```
- Create secret key : `python3 -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'`
- Populate .env file
- Install postgresql python connector : `pip install psycopg2`
- Install postgresql on machine
- Create static files directory (for css and js) :
	```Python
	# Add this to settings.py then create the directory
	STATICFILES_DIRS = (
		'static/',
	)
	```
- Add templates directory : 
	```Python
	# Add the following to settings.py 
	import os # Add this line

	TEMPLATES = [
		{
			'BACKEND': 'django.template.backends.django.DjangoTemplates',
			'DIRS': [
				os.path.join(BASE_DIR, 'templates')  # Add this line
			],
			'APP_DIRS': True,
			'OPTIONS': {
				'context_processors': [
					'django.template.context_processors.debug',
					'django.template.context_processors.request',
					'django.contrib.auth.context_processors.auth',
					'django.contrib.messages.context_processors.messages',
				],
			},
		},
	]
	```
- Create error views : `Add 404.html, 500.html.. files to TEMPLATES_DIR`

### Commands

- Start project : `django-admin startproject PROJECT_NAME`
- Create app : `python manage.py startapp APP_NAME`
- Runserver : `python manage.py runserver`
- Check static collection in developpement : `python manage.py collectstatic`
- Create migrations when you change models : `python manage.py makemigrations`
- Add changes to db : `python manage.py migrate`
- Django shell : `python manage.py shell`
- Create admin : `python manage.py createsuperuser`

### Code

- Render page : `render(request, "html/pages/index.html", args)`
- Retrieve GET request params : `request.GET.get(PARAM, '')`
- Retrieve POST request params : `request.POST.get(PARAM, '')`
- Templating :
	- Loop dict : `\{% for key, value in dict.items %\}`
- Add css sheet in html : 
```django
{% load static %}

<link rel="stylesheet" href="{% static 'polls/style.css' %}">
```
- Create new urls file : 
	- Add code to the new file : 
		```Python
		from django.urls import path

		from . import views

		urlpatterns = [
			path("", views.index, name="index"),
		]
		```
	- Then include urls file : 
		```Python
		from django.urls import include

		path("PATH/", include("APP.urls")),
		```
- Ways to create a view :
	- HTTPResponse :
		```Python
		from django.http import HttpResponse

		def index(request):
			return HttpResponse("Hello")
		```
	- Render : 
		```Python
		from django.shortcuts import render

		def index(request):
			context = {"var1": "value1"}
			return render(request, "App/index.html", context) # index.html can contain {{ var1 }} which will be replaced with value1
		```
- Create a model :
	```Python
	CustomTable CustomTable(models.Model):
		question_text = models.CharField(max_length=200)
		pub_date = models.DateTimeField("date published")
	```
- Test models (in shell) :
	```Python
	from APP.models import CustomTable

	CustomTable.objects.all()
	```
- Make model modifiable from admin site :
	```Python
	# Add to App/admin.py

	from .models import CustomTable

	admin.site.register(CustomTable)
	```

### Deploy checklist:

- Configure static files : [Static files](https://docs.djangoproject.com/en/4.2/howto/static-files/)

### Deploy on Railway

- Create git repo with manage.py in base dir
- Add virtual env and activate it `python -m venv .venv`
- Install Django : `pip install Django` and gunicorn `pip install gunicorn`
- `pip freeze > requirements.txt`
- Add railway.json in base dir. Template :
```
{
    "$schema": "https://railway.app/railway.schema.json",
    "build": {
        "builder": "NIXPACKS"
    },
    "deploy": {
        "startCommand": "python manage.py migrate && python manage.py collectstatic --noinput && gunicorn PROJECT.wsgi",
        "restartPolicyType": "ON_FAILURE",
        "restartPolicyMaxRetries": 10
    }
}
```
- Add STATIC_ROOT in settings.py : `STATIC_ROOT = os.path.join(BASE_DIR, 'static')`
- Add `/static` folder in base dir

## Docker

- Start ubuntu container : `docker run -it ubuntu`
- Connect to container : `docker exec -it CONTAINER SHELL`
- Force delete container : `docker rm CONTAINER --force`
- Change container hostname : `docker run --hostname HOSTNAME`
- Change Dockerfile name : `docker build -f "Custom.Dockerfile" .`
- Dockerfile template :
	```
	FROM scratch
	MAINTAINER FirstName LastName <first.last@company.com>
	LABEL com.company.key="value"
	VOLUME /srv/dataARG myvar=testval
	ENV ENV_VAR "value"
	EXPOSE 80
	SHELL ["/bin/sh", "-c"]
	ADD src/file.cpp /usr/include/mylib/file.cpp
	ONBUILD RUN /usr/sbin/nologin
	COPY src/file.cpp /usr/include/mylib/file.cpp
	RUN /usr/sbin/nologin
	WORKDIR /path/to/workdirUSER nobody
	ENTRYPOINT top -bCMD /usr/bin/default_cmd
	STOPSIGNAL SIGTERM
	HEALTHCHECK --interval=15 --timeout=60 --retries=5 CMD [ "/usr/bin/my_health_check_script", "arg_1" ]
	```
- Build image from Dockerfile : `docker build --tag 'image_name' .`

## Volatility

- Installation :
	```
	$ wget https://github.com/volatilityfoundation/volatility/archive/refs/tags/2.6.1.zip -O vol.zip
	$ unzip vol.zip
	$ cd volatility-2.6.1
	$ python2 setup.py install
	$ pip2 install yara-python==4.2.3
	```
- Create alias : `v=(vol -f IMG --profile Profile)`
- Scan for files location in dump : `$v filescan`
- Dump file in location : `$v dumpfiles -n -Q PhysAddr -D Dir`
- Dump registry : `$v dumpregistry`
- Dump hives : `$v hivelist`
- List keys : `$v hivedump`
- Print key from hive : `$v -o HIVE_VIRTUALOFFSET -K KEY`

## Binwalk

- Extract jpgs : `binwalk --rm -dd "jpeg:jpg" IMG`

## Yara rules

- File format :
```
rule NAME
{
    strings:
        $my_text_string = "flag.txt"
    $hex_string = { 53 00 46 00 }
    condition:
        $my_text_string or $hex_string
}
```
 - Show strings matched : `yara RULES_FILE -s BIN`

## SOC

### Linux

#### Important files

- `/etc/passwd`
- `/etc/shadow`
- `/etc/group`
- `/etc/sudoers`
- `/var/run/utmp` record system data
- `/var/run/wtmp` historical utmp
- `/var/log/btmp` failed logins
- `/var/log/auth.log` auth data
  - *egrep "useradd|passwd|groupadd|usermod" /var/log/auth.log*
- `.bashrc`
- `.bash_profile`
- `/var/log/syslog` Execution of cron jobs + services 
- `/var/log/messages` Execution of cron jobs + services
- `/var/log/nginx/access.log` Web requests
- `/var/log/apache2/access.log` Web requests
- `/var/log/secure` Logon eventsUser creation eventsGroup eventsUser change events
- `/var/log/auth.log` Logon eventsUser creation eventsGroup eventsUser change events
- `/var/log/lastlog` Last logon information
- `~/.bash_history` commands history

#### Commands

- Last connected users: `last`
- Failed SSH logins: `journalctl _SYSTEMD_UNIT=ssh.service | egrep "Failed|Failure"`
- Delete user: `userdel -r USERNAME`
- Remove user from group: `gpasswd -d USERNAME GROUP`
- Edit sudoers file: `visudo`
- View process tree: `pstree`
- List all processes as a process tree: `ps aux --forest`
- List all processes in real time: `top`
  - P: sort the process list by cpu usage
  - N: sort the list by process id
  - T: sort by the running time
  - R: reverse the sorting order
  - C: display full command path and arguments of process
- Kill multiple processes with same name: `killall PROCESS_NAME`
- Find interesting and potentially dangerous files: `find / -type f \( -iname \*.php -o -iname \*.php7 -o -iname \*.sh -o -iname \*.elf \)`
- Find files modified during timeframe: `find /tmp -newermt "2021-10-25 00:00:00" ! -newermt "2021-10-25 23:59:00"`
- Find files modified before or after date: `find / -mtime -X` or `find / -mtime +X`
- Find weird files owned by user: `find /tmp -user www-data`
- Find files an attacker might have tampered with: `find / -ctime +X`
- Get data about a file: `stat FILENAME`
- List file systems mounted:
  - `findmnt`
  - `mount`
  - `cat /proc/mounts`
- Get mount logs: `dmesg | grep mount`
- Get data about disks: `df -aTh`
- List all TCP connections: `netstat -ant`
- List 'LISTEN' ports and programs used to listen: `netstat -nlpt`
- List firewall rules: `iptables -L`
- List all services:
  - `service --status-all`
  - `systemctl list-units --type=service`
- List data about all services that were run during a period of time:
  - `sudo journalctl --since "2021-05-07 00:00" --until "2021-05-07 23:59"`
  - add `-u NAME` if u know the name of the service
- Get service data:
  - `service SERVICE_NAME status`
  - `systemctl status SERVICE_NAME`
- Check cronjobs:
  - `cat /etc/crontab`
  - `cat /etc/cron.d/*`
  - `cat /var/spool/cron/crontabs/*`
  - `cat /var/spool/cron/*`
- Check cronjobs log:
  - `cat /var/log/syslog | grep CRON`
  - `journalctl -u cron  --since "2021-05-07 00:00" --until "2021-05-07 23:59"`
- Check `authorized_keys` for public ssh keys created by the hacker: `find / -name 'authorized_keys'`
- Check files:
  - `.bashrc`
  - `.bash_profile`

