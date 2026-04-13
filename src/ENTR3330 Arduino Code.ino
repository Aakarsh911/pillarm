int motorPin1 = 5;
int motorPin2 = 6;
int motorPin3 = 9;
int motorPin4 = 10;

bool alarmSet = false;
bool alarmFiring = false;
bool patternMode = false;
int alarmSpeed = 255;
unsigned long alarmTime = 0;

void setup() {
  pinMode(motorPin1, OUTPUT);
  pinMode(motorPin2, OUTPUT);
  pinMode(motorPin3, OUTPUT);
  pinMode(motorPin4, OUTPUT);
  Serial.begin(9600);
  Serial.println("Set alarm with: ALARM:seconds:speed:ON or PATTERN");
  Serial.println("Example: ALARM:10:200:PATTERN");
  Serial.println("Type OFF to cancel.");
}

void buzz(int duration, int spd) {
  analogWrite(motorPin1, spd);
  analogWrite(motorPin2, spd);
  analogWrite(motorPin3, spd);
  analogWrite(motorPin4, spd);
  delay(duration);
  analogWrite(motorPin1, 0);
  analogWrite(motorPin2, 0);
  analogWrite(motorPin3, 0);
  analogWrite(motorPin4, 0);
}

void allMotors(int spd) {
  analogWrite(motorPin1, spd);
  analogWrite(motorPin2, spd);
  analogWrite(motorPin3, spd);
  analogWrite(motorPin4, spd);
}

void loop() {
  if (Serial.available() > 0) {
    String command = Serial.readStringUntil('\n');
    command.trim();

    if (command == "OFF") {
      alarmSet = false;
      alarmFiring = false;
      allMotors(0);
      Serial.println("Alarm cancelled.");

    } else if (command.startsWith("ALARM:")) {
      int first = command.indexOf(':', 6);
      int second = command.indexOf(':', first + 1);

      if (first == -1 || second == -1) {
        Serial.println("Bad format. Use: ALARM:seconds:speed:ON or PATTERN");
      } else {
        int seconds = command.substring(6, first).toInt();
        alarmSpeed = constrain(command.substring(first + 1, second).toInt(), 0, 255);
        String mode = command.substring(second + 1);
        mode.trim();
        patternMode = (mode == "PATTERN");
        alarmFiring = false;
        alarmSet = true;
        alarmTime = millis() + (seconds * 1000UL);
        allMotors(0);

        Serial.print("Alarm set for ");
        Serial.print(seconds);
        Serial.print(" seconds, speed ");
        Serial.print(alarmSpeed);
        Serial.print(", mode: ");
        Serial.println(patternMode ? "PATTERN" : "ON");
      }
    } else {
      Serial.println("Unknown command. Use: ALARM:seconds:speed:ON or PATTERN");
    }
  }

  if (alarmSet && !alarmFiring && millis() >= alarmTime) {
    alarmFiring = true;
    alarmSet = false;
    Serial.println("ALARM GOING OFF! Type OFF to stop.");
  }

  if (alarmFiring) {
    if (patternMode) {
      buzz(200, alarmSpeed);
      delay(150);
      buzz(200, alarmSpeed);
      delay(150);
      buzz(200, alarmSpeed);
      delay(500);
    } else {
      allMotors(alarmSpeed);
    }
  }
}