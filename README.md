# iot-openweather-serverless

Simple IoT serverless function.

Index:
* [Setup](#setup)
* [Deploy](#deploy)
* [Test](#test)

------

## <a name="setup"></a> Setup

Serverless gives warning when using .env file so I've set the "setcreds" files as an alternative:

### Install Serverless Framework

For some reason, latest serverless framework versions are bugged. Created using v3.23.0.

```console
npm install -g serverless@3.23.0
```

### Windows

First time. Create a **setcreds.bat** file using **setcreds.bat.example** as template.

Every time. Run:

```console
setcreds
```

### Mac

First time. Create a **setcreds.sh** file using **setcreds.sh.example** as template.

```console
chmod +x setcreds.sh
```

Every time. Run:

```console
. ./setcreds.sh
```

------

## Deploy

```console
serverless deploy
```

------

## Test

```console
npm run test
```
