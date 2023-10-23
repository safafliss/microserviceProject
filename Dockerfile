FROM openjdk:8
EXPOSE 8088
ADD target/microyassine-0.0.1-SNAPSHOT.jar microyassine.jar
ENTRYPOINT ["java","-jar","microyassine.jar"]