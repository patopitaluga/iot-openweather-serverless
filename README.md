# IoT Smart Umbrella using nodemcu (esp8266) + serverless function.

IoT Project: Smart Umbrella serverless function.

![](https://patopitaluga.github.io/iot-openweather-serverless/images/umbrella1.jpg)

------

Index:
* [Setup](#setup)
* [Deploy](#deploy)
* [Test](#test)

------

## <a name="setup"></a> Setup

### Install Serverless Framework

For some reason, latest serverless framework versions are bugged. Created using v3.23.0.

```console
npm install -g serverless@3.23.0
```

### Set variables to dev and test in local environment

Serverless gives warning when using .env file so I've set the "setcreds" files as an alternative:

#### Windows

First time. Create a **setcreds.bat** file using **setcreds.bat.example** as template.

Every time. Run:

```console
setcreds
```

#### Mac

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

## Log serverless function

```console
serverless logs -f hello
```

------

## Test

```console
npm run test
```
