#!/usr/bin/python3

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    async_generator - Generates random numbers between 0 and 10

    Loops 10 times, each time waiting 1 second asynchronously
    before yielding a random number between 0 and 10.

    @arg: None
    Return: Asynchronously yields random float values
    """
    for _ in range(10):
        await asyncio.sleep(1)  # Wait for 1 second
        yield random.uniform(0, 10)  # Yield a random float between 0 and 10
