<p align="center">
    <img [NoSQL] src="https://cdn.sanity.io/images/bbnkhnhl/production/ae792d9ec362a0eee4d8a47a4e7a7b48c156c46d-1460x968.png?w=3840&q=75&fit=clip&auto=format">
</p>

---

# <p align="center">NoSQL</p>

---

## ➤ Menu:

- [➤ Description](#-description)
- [➤ Resources](#-resources)
- [➤ Learning Objectives](#-learning-objectives)
- [➤ Requirements](#-requirements)
- [➤ More Info](#-more-info)
- [➤ Tasks](#author-)
- [➤ Author](#author-)

---

## ➤ Description:

NoSQL databases are databases that do not use structured query language (SQL) to store and retrieve data. They are designed to handle large data volumes and high horizontal scalability, and have flexible or schema-less schema structures. There are different types of NoSQL databases, such as document-oriented databases, key-value databases and graph databases.

MongoDB is a document-oriented NoSQL database that stores data in the form of JSON documents. Documents can contain structured, semi-structured or unstructured data, making them particularly useful for storing complex, nested data.

To query information from a NoSQL database, you can use database-specific queries. In MongoDB, you can use "find" queries to retrieve documents from a collection. To insert, update or delete information in a NoSQL database, you can use database-specific commands. In MongoDB, you can use commands such as "insert", "update" and "delete" to manipulate data.

Pagination is a technique used in web applications and databases to retrieve data quickly and efficiently by dividing results into subsets. Pagination can be implemented using either shift pagination or key pagination. Pagination by key provides a consistent user experience, avoiding problems of data duplication or skipping when records are added or deleted.

Finally, pagination can be applied to both SQL and NoSQL databases, and can be useful in a variety of use cases, such as browsing blog posts, e-commerce items, forum threads and social media feeds.

---

## ➤ Resources:

Read or watch:

- [NoSQL Databases Explained](https://intranet.hbtn.io/rltoken/0HR2bZ3XFJzkttuEVF5Rug)
- [What is NoSQL ?](https://intranet.hbtn.io/rltoken/JGxz6PJsAN9cjBBT_WVCAg)
- [MongoDB with Python Crash Course - Tutorial for Beginners](https://intranet.hbtn.io/rltoken/PkdXgnfXUfJIk5iqf9Wp4A)
- [MongoDB Tutorial 2 : Insert, Update, Remove, Query](https://intranet.hbtn.io/rltoken/y6ncfHy0Hn7uqaIyitWQRg)
- [Aggregation](https://intranet.hbtn.io/rltoken/sIORcQADQT2Wf2opdMu30Q)
- [Introduction to MongoDB and Python](https://intranet.hbtn.io/rltoken/BLt93wwWTkVQWVlSDerI1g)
- [mongo Shell Methods](https://intranet.hbtn.io/rltoken/q-RfEFpmN-fGiX-SvmQjHA)
- [The mongo Shell](https://intranet.hbtn.io/rltoken/fmrWM3wzfC2d2-WHqzzPBQ)

---

## ➤ General

- What NoSQL means
- What is difference between SQL and NoSQL
- What is ACID
- What is a document storage
- What are NoSQL types
- What are benefits of a NoSQL database
- How to query information from a NoSQL database
- How to insert/update/delete information from a NoSQL database
- How to use MongoDB

---

## ➤ Requirements:

**MongoDB Command File**

- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using MongoDB (version 4.2)
- All your files should end with a new line
- The first line of all your files should be a comment: // my comment
- A README.md file, at the root of the folder of the project, is mandatory
- The length of your files will be tested using wc

**Python Scripts**

- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using python3 (version 3.7) and PyMongo (version 3.10)
- All your files should end with a new line
- The first line of all your files should be exactly #!/usr/bin/env python3
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the pycodestyle style (version 2.5.\*)
- The length of your files will be tested using wc
- All your modules should have a documentation (python3 -c 'print(**import**("my_module").**doc**)')
- All your functions should have a documentation (python3 -c 'print(**import**("my_module").my_function.**doc**)'
- Your code should not be executed when imported (by using if **name** == "**main**":)

## ➤ More Info:

Install MongoDB 4.2 in Ubuntu 18.04
[Official installation guide](https://intranet.hbtn.io/rltoken/mchw-5H4h95lL3Au_ETh_Q)

```
$ wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | apt-key add -
$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" > /etc/apt/sources.list.d/mongodb-org-4.2.list
$ sudo apt-get update
$ sudo apt-get install -y mongodb-org
...
$  sudo service mongod status
mongod start/running, process 3627
$ mongo --version
MongoDB shell version v4.2.8
git version: 43d25964249164d76d5e04dd6cf38f6111e21f5f
OpenSSL version: OpenSSL 1.1.1  11 Sep 2018
allocator: tcmalloc
modules: none
build environment:
    distmod: ubuntu1804
    distarch: x86_64
    target_arch: x86_64
$
$ pip3 install pymongo
$ python3
>>> import pymongo
>>> pymongo.__version__
'3.10.1'
```

Potential issue if documents creation doesn’t work or this error: Data directory /data/db not found., terminating (source and source)

```
$ sudo mkdir -p /data/db
```

Or if /etc/init.d/mongod is missing, please find here an example of the file:

Click to expand/hide file contents

```
#!/bin/sh
### BEGIN INIT INFO
# Provides:          mongod
# Required-Start:    $network $local_fs $remote_fs
# Required-Stop:     $network $local_fs $remote_fs
# Should-Start:      $named
# Should-Stop:
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: An object/document-oriented database
# Description:       MongoDB is a high-performance, open source, schema-free
#                    document-oriented data store that's easy to deploy, manage
#                    and use. It's network accessible, written in C++ and offers
#                    the following features:
#
#                       * Collection oriented storage - easy storage of object-
#                         style data
#                       * Full index support, including on inner objects
#                       * Query profiling
#                       * Replication and fail-over support
#                       * Efficient storage of binary data including large
#                         objects (e.g. videos)
#                       * Automatic partitioning for cloud-level scalability
#
#                    High performance, scalability, and reasonable depth of
#                    functionality are the goals for the project.
### END INIT INFO

PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin
DAEMON=/usr/bin/mongod
DESC=database

NAME=mongod
# Defaults.  Can be overridden by the /etc/default/$NAME
# Other configuration options are located in $CONF file. See here for more:
# http://dochub.mongodb.org/core/configurationoptions
CONF=/etc/mongod.conf
PIDFILE=/var/run/$NAME.pid
ENABLE_MONGOD=yes

# Include mongodb defaults if available.
# All variables set before this point can be overridden by users, by
# setting them directly in the defaults file. Use this to explicitly
# override these values, at your own risk.
if [ -f /etc/default/$NAME ] ; then
        . /etc/default/$NAME
fi

# Handle NUMA access to CPUs (SERVER-3574)
# This verifies the existence of numactl as well as testing that the command works
NUMACTL_ARGS="--interleave=all"
if which numactl >/dev/null 2>/dev/null && numactl $NUMACTL_ARGS ls / >/dev/null 2>/dev/null
then
    NUMACTL="`which numactl` -- $NUMACTL_ARGS"
    DAEMON_OPTS=${DAEMON_OPTS:-"--config $CONF"}
else
    NUMACTL=""
    DAEMON_OPTS="-- "${DAEMON_OPTS:-"--config $CONF"}
fi


if test ! -x $DAEMON; then
    echo "Could not find $DAEMON"
    exit 0
fi

if test "x$ENABLE_MONGOD" != "xyes"; then
    exit 0
fi

. /lib/lsb/init-functions

STARTTIME=1
DIETIME=10                  # Time to wait for the server to die, in seconds
                            # If this value is set too low you might not
                            # let some servers to die gracefully and
                            # 'restart' will not work

DAEMONUSER=${DAEMONUSER:-mongodb}
DAEMONGROUP=${DAEMONGROUP:-mongodb}

set -e

running_pid() {
# Check if a given process pid's cmdline matches a given name
    pid=$1
    name=$2
    [ -z "$pid" ] && return 1
    [ ! -d /proc/$pid ] &&  return 1
    cmd=`cat /proc/$pid/cmdline | tr "\000" "\n"|head -n 1 |cut -d : -f 1`
    # Is this the expected server
    [ "$cmd" != "$name" ] &&  return 1
    return 0
}

running() {
# Check if the process is running looking at /proc
# (works for all users)

    # No pidfile, probably no daemon present
    [ ! -f "$PIDFILE" ] && return 1
    pid=`cat $PIDFILE`
    running_pid $pid $DAEMON || return 1
    return 0
}

start_server() {
            # Start the process using the wrapper
            start-stop-daemon --background --start --quiet --pidfile $PIDFILE \
                        --make-pidfile --chuid $DAEMONUSER:$DAEMONGROUP \
                        --exec $NUMACTL $DAEMON $DAEMON_OPTS
            errcode=$?
        return $errcode
}

stop_server() {
# Stop the process using the wrapper
            start-stop-daemon --stop --quiet --pidfile $PIDFILE \
                        --retry 300 \
                        --user $DAEMONUSER \
                        --exec $DAEMON
            errcode=$?
        return $errcode
}

force_stop() {
# Force the process to die killing it manually
        [ ! -e "$PIDFILE" ] && return
        if running ; then
                kill -15 $pid
        # Is it really dead?
                sleep "$DIETIME"s
                if running ; then
                        kill -9 $pid
                        sleep "$DIETIME"s
                        if running ; then
                                echo "Cannot kill $NAME (pid=$pid)!"
                                exit 1
                        fi
                fi
        fi
        rm -f $PIDFILE
}


case "$1" in
  start)
        log_daemon_msg "Starting $DESC" "$NAME"
        # Check if it's running first
        if running ;  then
            log_progress_msg "apparently already running"
            log_end_msg 0
            exit 0
        fi
        if start_server ; then
            # NOTE: Some servers might die some time after they start,
            # this code will detect this issue if STARTTIME is set
            # to a reasonable value
            [ -n "$STARTTIME" ] && sleep $STARTTIME # Wait some time
            if  running ;  then
                # It's ok, the server started and is running
                log_end_msg 0
            else
                # It is not running after we did start
                log_end_msg 1
            fi
        else
            # Either we could not start it
            log_end_msg 1
        fi
        ;;
  stop)
        log_daemon_msg "Stopping $DESC" "$NAME"
        if running ; then
            # Only stop the server if we see it running
                        errcode=0
            stop_server || errcode=$?
            log_end_msg $errcode
        else
            # If it's not running don't do anything
            log_progress_msg "apparently not running"
            log_end_msg 0
            exit 0
        fi
        ;;
  force-stop)
        # First try to stop gracefully the program
        $0 stop
        if running; then
            # If it's still running try to kill it more forcefully
            log_daemon_msg "Stopping (force) $DESC" "$NAME"
                        errcode=0
            force_stop || errcode=$?
            log_end_msg $errcode
        fi
        ;;
  restart|force-reload)
        log_daemon_msg "Restarting $DESC" "$NAME"
                errcode=0
        stop_server || errcode=$?
        # Wait some sensible amount, some server need this
        [ -n "$DIETIME" ] && sleep $DIETIME
        start_server || errcode=$?
        [ -n "$STARTTIME" ] && sleep $STARTTIME
        running || errcode=$?
        log_end_msg $errcode
        ;;
  status)

        log_daemon_msg "Checking status of $DESC" "$NAME"
        if running ;  then
            log_progress_msg "running"
            log_end_msg 0
        else
            log_progress_msg "apparently not running"
            log_end_msg 1
            exit 1
        fi
        ;;
  # MongoDB can't reload its configuration.
  reload)
        log_warning_msg "Reloading $NAME daemon: not implemented, as the daemon"
        log_warning_msg "cannot re-read the config file (use restart)."
        ;;

  *)
        N=/etc/init.d/$NAME
        echo "Usage: $N {start|stop|force-stop|restart|force-reload|status}" >&2
        exit 1
        ;;
esac

exit 0
```

**Use “container-on-demand” to run MongoDB**

- Ask for container Ubuntu 18.04 - MongoDB
- Connect via SSH
- Or via the WebTerminal
- In the container, you should start MongoDB before playing with it:

```
$ service mongod start
* Starting database mongod                                              [ OK ]
$
$ cat 0-list_databases | mongo
MongoDB shell version v4.2.8
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("70f14b38-6d0b-48e1-a9a4-0534bcf15301") }
MongoDB server version: 4.2.8
admin   0.000GB
config  0.000GB
local   0.000GB
bye
$
```

---

<details>
<summary>Tasks:</summary>

### 0.0. List all databases

Write a script that lists all databases in MongoDB.

```
guillaume@ubuntu:~/$ cat 0-list_databases | mongo
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.6.3
admin        0.000GB
config       0.000GB
local        0.000GB
logs         0.005GB
bye
guillaume@ubuntu:~/$
```

Repo:

- GitHub repository: holbertonschool-web_back_end
- Directory: NoSQL
- File: 0-list_databases

### 1. Create a database

Write a script that creates or uses the database my_db:

```
guillaume@ubuntu:~/$ cat 0-list_databases | mongo
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.6.3
admin        0.000GB
config       0.000GB
local        0.000GB
logs         0.005GB
bye
guillaume@ubuntu:~/$
guillaume@ubuntu:~/$ cat 1-use_or_create_database | mongo
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.6.3
switched to db my_db
bye
guillaume@ubuntu:~/$
```

Repo:

- GitHub repository: holbertonschool-web_back_end
- Directory: NoSQL
- File: 1-use_or_create_database

### 2. Insert document

Write a script that inserts a document in the collection school:

- The document must have one attribute name with value “Holberton school”
- The database name will be passed as option of mongo command

```
guillaume@ubuntu:~/$ cat 2-insert | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
WriteResult({ "nInserted" : 1 })
bye
guillaume@ubuntu:~/$
```

Repo:

- GitHub repository: holbertonschool-web_back_end
- Directory: NoSQL
- File: 2-insert

### 3. All documents

Write a script that lists all documents in the collection school:

- The database name will be passed as option of mongo command

```
guillaume@ubuntu:~/$ cat 3-all | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
{ "_id" : ObjectId("5a8fad532b69437b63252406"), "name" : "Holberton school" }
bye
guillaume@ubuntu:~/$
```

Repo:

- GitHub repository: holbertonschool-web_back_end
- Directory: NoSQL
- File: 3-all

### 4. All matches

Write a script that lists all documents with name="Holberton school" in the collection school:

- The database name will be passed as option of mongo command

```
guillaume@ubuntu:~/$ cat 4-match | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
{ "_id" : ObjectId("5a8fad532b69437b63252406"), "name" : "Holberton school" }
bye
guillaume@ubuntu:~/$
```

Repo:

- GitHub repository: holbertonschool-web_back_end
- Directory: NoSQL
- File: 4-match

### 5. Count

Write a script that displays the number of documents in the collection school:

- The database name will be passed as option of mongo command

```
guillaume@ubuntu:~/$ cat 5-count | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
1
bye
guillaume@ubuntu:~/$
```

Repo:

- GitHub repository: holbertonschool-web_back_end
- Directory: NoSQL
- File: 5-count

### 6. Update

Write a script that adds a new attribute to a document in the collection school:

- The script should update only document with name="Holberton school" (all of them)
- The update should add the attribute address with the value “972 Mission street”
- The database name will be passed as option of mongo command

```
guillaume@ubuntu:~/$ cat 6-update | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
bye
guillaume@ubuntu:~/$
guillaume@ubuntu:~/$ cat 4-match | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
{ "_id" : ObjectId("5a8fad532b69437b63252406"), "name" : "Holberton school", "address" : "972 Mission street" }
bye
guillaume@ubuntu:~/$
```

Repo:

- GitHub repository: holbertonschool-web_back_end
- Directory: NoSQL
- File: 6-update

7. Delete by match

Write a script that deletes all documents with name="Holberton school" in the collection school:

- The database name will be passed as option of mongo command

```
guillaume@ubuntu:~/$ cat 7-delete | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
{ "acknowledged" : true, "deletedCount" : 1 }
bye
guillaume@ubuntu:~/$
guillaume@ubuntu:~/$ cat 4-match | mongo my_db
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/my_db
MongoDB server version: 3.6.3
bye
guillaume@ubuntu:~/$
```

Repo:

- GitHub repository: holbertonschool-web_back_end
- Directory: NoSQL
- File: 7-delete

### 8. List all documents in Python

Write a Python function that lists all documents in a collection:

- Prototype: def list_all(mongo_collection):
- Return an empty list if no document in the collection
- mongo_collection will be the pymongo collection object

```
guillaume@ubuntu:~/$ cat 8-main.py
#!/usr/bin/env python3
""" 8-main """
from pymongo import MongoClient
list_all = __import__('8-all').list_all

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    school_collection = client.my_db.school
    schools = list_all(school_collection)
    for school in schools:
        print("[{}] {}".format(school.get('_id'), school.get('name')))

guillaume@ubuntu:~/$
guillaume@ubuntu:~/$ ./8-main.py
[5a8f60cfd4321e1403ba7ab9] Holberton school
[5a8f60cfd4321e1403ba7aba] UCSD
guillaume@ubuntu:~/$
```

Repo:

- GitHub repository: holbertonschool-web_back_end
- Directory: NoSQL
- File: 8-all.py

### 9. Insert a document in Python

Write a Python function that inserts a new document in a collection based on kwargs:

- Prototype: def insert_school(mongo_collection, \*\*kwargs):
- mongo_collection will be the pymongo collection object
- Returns the new \_id

```
guillaume@ubuntu:~/$ cat 9-main.py
#!/usr/bin/env python3
""" 9-main """
from pymongo import MongoClient
list_all = __import__('8-all').list_all
insert_school = __import__('9-insert_school').insert_school

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    school_collection = client.my_db.school
    new_school_id = insert_school(school_collection, name="UCSF", address="505 Parnassus Ave")
    print("New school created: {}".format(new_school_id))

    schools = list_all(school_collection)
    for school in schools:
        print("[{}] {} {}".format(school.get('_id'), school.get('name'), school.get('address', "")))

guillaume@ubuntu:~/$
guillaume@ubuntu:~/$ ./9-main.py
New school created: 5a8f60cfd4321e1403ba7abb
[5a8f60cfd4321e1403ba7ab9] Holberton school
[5a8f60cfd4321e1403ba7aba] UCSD
[5a8f60cfd4321e1403ba7abb] UCSF 505 Parnassus Ave
guillaume@ubuntu:~/$
```

Repo:

- GitHub repository: holbertonschool-web_back_end
- Directory: NoSQL
- File: 9-insert_school.py

### 10. Change school topics

Write a Python function that changes all topics of a school document based on the name:

- Prototype: def update_topics(mongo_collection, name, topics):
- mongo_collection will be the pymongo collection object
- name (string) will be the school name to update
- topics (list of strings) will be the list of topics approached in the school

```
guillaume@ubuntu:~/$ cat 10-main.py
#!/usr/bin/env python3
""" 10-main """
from pymongo import MongoClient
list_all = __import__('8-all').list_all
update_topics = __import__('10-update_topics').update_topics

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    school_collection = client.my_db.school
    update_topics(school_collection, "Holberton school", ["Sys admin", "AI", "Algorithm"])

    schools = list_all(school_collection)
    for school in schools:
        print("[{}] {} {}".format(school.get('_id'), school.get('name'), school.get('topics', "")))

    update_topics(school_collection, "Holberton school", ["iOS"])

    schools = list_all(school_collection)
    for school in schools:
        print("[{}] {} {}".format(school.get('_id'), school.get('name'), school.get('topics', "")))

guillaume@ubuntu:~/$
guillaume@ubuntu:~/$ ./10-main.py
[5a8f60cfd4321e1403ba7abb] UCSF
[5a8f60cfd4321e1403ba7aba] UCSD
[5a8f60cfd4321e1403ba7ab9] Holberton school ['Sys admin', 'AI', 'Algorithm']
[5a8f60cfd4321e1403ba7abb] UCSF
[5a8f60cfd4321e1403ba7aba] UCSD
[5a8f60cfd4321e1403ba7ab9] Holberton school ['iOS']
guillaume@ubuntu:~/$
```

Repo:

- GitHub repository: holbertonschool-web_back_end
- Directory: NoSQL
- File: 10-update_topics.py

### 11. Where can I learn Python?

Write a Python function that returns the list of school having a specific topic:

- Prototype: def schools_by_topic(mongo_collection, topic):
- mongo_collection will be the pymongo collection object
- topic (string) will be topic searched

```
guillaume@ubuntu:~/$ cat 11-main.py
#!/usr/bin/env python3
""" 11-main """
from pymongo import MongoClient
list_all = __import__('8-all').list_all
insert_school = __import__('9-insert_school').insert_school
schools_by_topic = __import__('11-schools_by_topic').schools_by_topic

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    school_collection = client.my_db.school

    j_schools = [
        { 'name': "Holberton school", 'topics': ["Algo", "C", "Python", "React"]},
        { 'name': "UCSF", 'topics': ["Algo", "MongoDB"]},
        { 'name': "UCLA", 'topics': ["C", "Python"]},
        { 'name': "UCSD", 'topics': ["Cassandra"]},
        { 'name': "Stanford", 'topics': ["C", "React", "Javascript"]}
    ]
    for j_school in j_schools:
        insert_school(school_collection, **j_school)

    schools = schools_by_topic(school_collection, "Python")
    for school in schools:
        print("[{}] {} {}".format(school.get('_id'), school.get('name'), school.get('topics', "")))

guillaume@ubuntu:~/$
guillaume@ubuntu:~/$ ./11-main.py
[5a90731fd4321e1e5a3f53e3] Holberton school ['Algo', 'C', 'Python', 'React']
[5a90731fd4321e1e5a3f53e5] UCLA ['C', 'Python']
guillaume@ubuntu:~/$
```

Repo:

- GitHub repository: holbertonschool-web_back_end
- Directory: NoSQL
- File: 11-schools_by_topic.py

### 12. Log stats

Write a Python script that provides some stats about Nginx logs stored in MongoDB:

- Database: logs
- Collection: nginx
- Display (same as the example):
- first line: x logs where x is the number of documents in this collection
- second line: Methods:
- 5 lines with the number of documents with the method = ["GET", "POST", "PUT", "PATCH", "DELETE"] in this order (see example below - warning: it’s a tabulation before each line)
- one line with the number of documents with:
- method=GET
- path=/status

You can use this dump as data sample: dump.zip

The output of your script must be exactly the same as the example

```
guillaume@ubuntu:~/$ curl -o dump.zip -s "https://s3.eu-west-3.amazonaws.com/hbtn.intranet.project.files/holbertonschool-webstack/411/dump.zip"
guillaume@ubuntu:~/$
guillaume@ubuntu:~/$ unzip dump.zip
Archive:  dump.zip
   creating: dump/
   creating: dump/logs/
  inflating: dump/logs/nginx.metadata.json
  inflating: dump/logs/nginx.bson
guillaume@ubuntu:~/$
guillaume@ubuntu:~/$ mongorestore dump
2018-02-23T20:12:37.807+0000    preparing collections to restore from
2018-02-23T20:12:37.816+0000    reading metadata for logs.nginx from dump/logs/nginx.metadata.json
2018-02-23T20:12:37.825+0000    restoring logs.nginx from dump/logs/nginx.bson
2018-02-23T20:12:40.804+0000    [##......................]  logs.nginx  1.21MB/13.4MB  (9.0%)
2018-02-23T20:12:43.803+0000    [#####...................]  logs.nginx  2.88MB/13.4MB  (21.4%)
2018-02-23T20:12:46.803+0000    [#######.................]  logs.nginx  4.22MB/13.4MB  (31.4%)
2018-02-23T20:12:49.803+0000    [##########..............]  logs.nginx  5.73MB/13.4MB  (42.7%)
2018-02-23T20:12:52.803+0000    [############............]  logs.nginx  7.23MB/13.4MB  (53.8%)
2018-02-23T20:12:55.803+0000    [###############.........]  logs.nginx  8.53MB/13.4MB  (63.5%)
2018-02-23T20:12:58.803+0000    [#################.......]  logs.nginx  10.1MB/13.4MB  (74.9%)
2018-02-23T20:13:01.803+0000    [####################....]  logs.nginx  11.3MB/13.4MB  (83.9%)
2018-02-23T20:13:04.803+0000    [######################..]  logs.nginx  12.8MB/13.4MB  (94.9%)
2018-02-23T20:13:06.228+0000    [########################]  logs.nginx  13.4MB/13.4MB  (100.0%)
2018-02-23T20:13:06.230+0000    no indexes to restore
2018-02-23T20:13:06.231+0000    finished restoring logs.nginx (94778 documents)
2018-02-23T20:13:06.232+0000    done
guillaume@ubuntu:~/$
guillaume@ubuntu:~/$ ./12-log_stats.py
94778 logs
Methods:
    method GET: 93842
    method POST: 229
    method PUT: 0
    method PATCH: 0
    method DELETE: 0
47415 status check
guillaume@ubuntu:~/$
```

Repo:

- GitHub repository: holbertonschool-web_back_end
- Directory: NoSQL
- File: 12-log_stats.py

</details>
