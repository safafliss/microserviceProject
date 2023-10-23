FROM openjdk:8
EXPOSE 8090
ADD target/test_ms-0.0.1-SNAPSHOT.jar test.jar
ENTRYPOINT ["java","-jar","test.jar"]
