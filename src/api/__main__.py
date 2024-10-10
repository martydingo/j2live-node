from .j2live import API
from uvicorn import Server, Config
from argparse import ArgumentParser
import asyncio, subprocess

argParser = ArgumentParser()
argParser.add_argument("-e", "--environment", default="production")
args = argParser.parse_args()

j2live_api = API()


async def main():
    async with asyncio.TaskGroup() as taskGroup:
        taskGroup.create_task(run_frontend())
        taskGroup.create_task(run_backend())


async def run_frontend():
    if args.environment == "production":
        subprocess.Popen(["bun", "run", "start"])
    elif args.environment == "development":
        # "bun x http-server --port 4173"
        subprocess.Popen(["bun", "dev"])


async def run_backend():
    config = Config(app=j2live_api.API, host="0.0.0.0")
    server = Server(config=config)
    await server.serve()


asyncio.run(main())
