#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

// #define LED1 D4 // onboard led for nodemcu
#define LED1 4 // gpio4 = pin D2

const char* ssid = "";
const char* password = "";

String apiUrl = "";

int status = WL_IDLE_STATUS;

unsigned long timerDelay = 1 * 60 * 60 * 1000;

unsigned int free_heap_before = 0;
unsigned int free_stack_before = 0;

void setup() {
  pinMode(LED1, OUTPUT); // LED pin as output.

  Serial.begin(115200);
  Serial.flush();

  free_heap_before = ESP.getFreeHeap();
  free_stack_before = ESP.getFreeContStack();
  Serial.printf("Free heap: %u\n", free_heap_before);
  Serial.printf("Free stack: %u\n", free_stack_before);

  Serial.println();
  Serial.print("Connecting to wifi: ");
  Serial.println(ssid);
  // flush() is needed to print the above (connecting...) message reliably,
  // in case the wireless connection doesn't go through
  Serial.flush();

  WiFi.begin(ssid, password);
  while (status != WL_CONNECTED) {
    delay(5000);
    Serial.print(".");
    status = WiFi.status();
  }
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  delay(500);
}

HTTPClient http;
WiFiClientSecure client;

void loop() {
  if (http.begin(client, apiUrl)) {
    client.setInsecure();

    Serial.print("[HTTP] GET...\n");
    int httpCode = http.GET();
    if (httpCode > 0) {
      Serial.printf("[HTTP] GET... code: %d\n", httpCode);
      if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
        String payload = http.getString();
        // Serial.println(payload);
        if (payload == "rain") {
          digitalWrite(LED1, HIGH);
        } else {
          digitalWrite(LED1, LOW);
        }
      }
    } else {
      Serial.printf("[HTTP] GET... failed, error: %s\n", http.errorToString(httpCode).c_str());
    }
    http.end();
  } else {
    Serial.printf("[HTTP} Unable to connect\n");
  }
  delay(timerDelay);
}
