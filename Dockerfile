FROM openjdk:8
EXPOSE 8080
ADD target/entretiens.jar entretiens.jar
ENTRYPOINT ["java", "-jar", "entretiens.jar"]
