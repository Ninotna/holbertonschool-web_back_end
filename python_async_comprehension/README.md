<p align="center">
    <img [Python - Async] src="https://ioflood.com/blog/wp-content/uploads/2023/09/Asynchronous-programming-in-Python-async-await-code-time-lines-Python-logo.jpg">
</p>

---

# <p align="center">Python - Async Comprehension</p>

---

## ➤ Menu:

- [➤ Description](#-description)
- [➤ Resources](#-resources)
- [➤ Learning Objectives](#-learning-objectives)
- [➤ Requirements](#-requirements)
- [➤ Tasks](#author-)
- [➤ Author](#author-)

---

## ➤ Description:

---

## ➤ Resources:

Read or watch:

- [PEP 530 – Asynchronous Comprehensions](https://intranet.hbtn.io/rltoken/UFCR8qW3nHmEDZZaHqXL7Q)
- [What’s New in Python: Asynchronous Comprehensions / Generators](https://intranet.hbtn.io/rltoken/PAGwxZUyVGBR8EMFGGNnGg)
- [Type-hints for generators](https://intranet.hbtn.io/rltoken/SAxOMI925qJrJVGmZ0JBNw)

---

## ➤ Learning Objectives:

- How to write an asynchronous generator
- How to use async comprehensions
- How to type-annotate generators

---

## ➤ Requirements:

**General**

- Allowed editors: vi, vim, emacs
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using python3 (version 3.7)
- All your files should end with a new line
- The first line of all your files should be exactly #!/usr/bin/env python3
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the pycodestyle style (version 2.5.x)
- The length of your files will be tested using wc
- All your modules should have a documentation (python3 -c 'print(**import**("my_module").**doc**)')
- All your functions should have a documentation (python3 -c 'print(**import**("my_module").my_function.**doc**)'
- A documentation is not a simple word, it’s a real sentence explaining what’s the purpose of the module, class or method (the length of it will be verified)
- All your functions and coroutines must be type-annotated.

---

<details>
<summary>Tasks:</summary>

### 0. Async Generator

Write a coroutine called async_generator that takes no arguments.

The coroutine will loop 10 times, each time asynchronously wait 1 second, then yield a random number between 0 and 10. Use the random module.

```
bob@dylan:~$ cat 0-main.py
#!/usr/bin/env python3

import asyncio

async_generator = __import__('0-async_generator').async_generator

async def print_yielded_values():
    result = []
    async for i in async_generator():
        result.append(i)
    print(result)

asyncio.run(print_yielded_values())

bob@dylan:~$ ./0-main.py
[4.403136952967102, 6.9092712604587465, 6.293445466782645, 4.549663490048418, 4.1326571686139015, 9.99058525304903, 6.726734105473811, 9.84331704602206, 1.0067279479988345, 1.3783306401737838]
```

Repo:

- GitHub repository: holbertonschool-web_back_end
- Directory: python_async_comprehension
- File: 0-async_generator.py

### 1. Async Comprehensions

Import async_generator from the previous task and then write a coroutine called async_comprehension that takes no arguments.

The coroutine will collect 10 random numbers using an async comprehensing over async_generator, then return the 10 random numbers.

```
bob@dylan:~$ cat 1-main.py
#!/usr/bin/env python3

import asyncio

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def main():
    print(await async_comprehension())

asyncio.run(main())

bob@dylan:~$ ./1-main.py
[9.861842105071727, 8.572355293354995, 1.7467182056248265, 4.0724372912858575, 0.5524750922145316, 8.084266576021555, 8.387128918690468, 1.5486451376520916, 7.713335177885325, 7.673533267041574]
```

Repo:

- GitHub repository: holbertonschool-web_back_end
- Directory: python_async_comprehension
- File: 1-async_comprehension.py

### 2. Run time for four parallel comprehensions

Import async_comprehension from the previous file and write a measure_runtime coroutine that will execute async_comprehension four times in parallel using asyncio.gather.

measure_runtime should measure the total runtime and return it.

Notice that the total runtime is roughly 10 seconds, explain it to yourself.

```
bob@dylan:~$ cat 2-main.py
#!/usr/bin/env python3

import asyncio


measure_runtime = __import__('2-measure_runtime').measure_runtime


async def main():
    return await(measure_runtime())

print(
    asyncio.run(main())
)

bob@dylan:~$ ./2-main.py
10.021936893463135
```

Repo:

- GitHub repository: holbertonschool-web_back_end
- Directory: python_async_comprehension
- File: 2-measure_runtime.py

</details>
