# IoT Smart Umbrella using nodemcu (esp8266) + serverless function.

IoT Project: Smart Umbrella serverless function.

![](https://patopitaluga.github.io/iot-openweather-serverless/images/umbrella1.jpg)

------

Index:
* [Setup](#setup)
* [Deploy](#deploy)
* [Test](#test)
* [Components](#components)

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

## <a name="deploy"></a> Deploy

```console
serverless deploy
```

------

## <a name="test"></a> Test

Test access to openweather api and to serverless funcion.

```console
npm run test
```

Log serverless function.

```console
serverless logs -f hello
```

------

## <a name="components"></a> Components

- Nodemcu
- Resistor 220 ohm
- Led

```
NodeMCU / ESP8266

       ┌─────────────────────┐
       │ O                 O │
       │o A0             D0 o│
       ├─ RSV            D1 o│
       │o RSV            D2 o├────┐
       │o SD3            D3 o│    │
       │o SD2            D4 o│    │ (long leg)
       │o SD1           3V3 o│    ▼ Led S
       │o CMD           GND o│    │ (short leg)
       │o SD0            D5 o│    │
       │o CLK            D6 o│    │
       │o GND            D7 o│    R Resistor 220 ohm
       │o 3V3            D8 o│    │ (no polarity | either direction)
       │o EN             RX o│    │
       │o RST            TX o│    │
       │o GND           GND o├────┘
       │o Vin           3V3 o│
       │   RST         FLA   │
       │    @ ┌───────┐ @    │
       │ O    │       │    O │
       └──────┤       ├──────┘
              └───────┘

```
