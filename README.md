# iot-openweather-serverless

Simple IoT serverless function

## Setup

Serverless gives warning when using .env file so I've set the "setcreds" files as an alternative:

### Windows

First time. Create a **setcreds.bat** file using **setcreds.bat.example** as template.

Every time. Run:

```
setcreds
```

### Mac

First time. Create a **setcreds.sh** file using **setcreds.sh.example** as template.

```
chmod +x setcreds.sh
```

Every time. Run:

```
. ./setcreds.sh
```
