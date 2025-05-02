# Pagination Project

## Overview

This project focuses on understanding and implementing pagination for datasets. By the end of this project, you will be able to:

- Paginate a dataset using simple `page` and `page_size` parameters.
- Implement pagination with hypermedia metadata (HATEOAS).
- Design a deletion-resilient pagination system.

## Learning Resources

The following resources will help you understand the concepts required for this project:

- [REST API Design: Pagination](https://restfulapi.net/pagination/)
- [HATEOAS](https://restfulapi.net/hateoas/)

## Learning Objectives

By completing this project, you will gain the ability to explain:

1. How to paginate a dataset using `page` and `page_size` parameters.
2. The implementation of pagination with hypermedia metadata.
3. How to ensure pagination remains resilient in case of deletions within the dataset.

## Requirements

To ensure the project meets the necessary standards, adhere to the following requirements:

- Use Ubuntu 20.04 LTS with Python 3.9 for interpretation and compilation of files.
- Every file must end with a new line.
- The first line of each file must be `#!/usr/bin/env python3`.
- Include a `README.md` file in the root directory of the project.
- Adhere to the pycodestyle style guide (version 2.5.\*).
- Validate file lengths using the `wc` command.
- All modules and functions must include proper documentation. For example:
  - Module documentation: `python3 -c 'print(__import__("my_module").__doc__)'`
  - Function documentation: `python3 -c 'print(__import__("my_module").my_function.__doc__)'`
- Documentation must be descriptive and provide detailed explanations about the purpose of the module, class, or method.
- Ensure all functions and coroutines are type-annotated.

## Project Deliverables

The project requires implementing the following components:

1. **Pagination with `page` and `page_size` Parameters**

   - Implement a function to paginate a dataset based on these parameters.

2. **Hypermedia Pagination**

   - Extend the implementation to include hypermedia metadata (HATEOAS) for better navigation.

3. **Deletion-Resilient Pagination**

   - Ensure the pagination system can handle deletions within the dataset without disrupting the data flow or causing inconsistencies.

4. **Documentation**

   - Properly document all modules, functions, and methods with clear and descriptive explanations.

5. **Testing**
   - Ensure all code meets the style guidelines and passes validation tests.

## Instructions for Running the Code

1. Clone the repository and navigate to the project directory.
2. Ensure Python 3.9 is installed on your system.
3. Execute the main scripts using `python3`.
4. Run tests to validate your implementation.
5. Use `wc` to verify file lengths and `pycodestyle` for style compliance.

## Example Usage

Detailed examples of how to use the implemented functions will be included in the project files.

## License

This project is open-source and available under the MIT License.
