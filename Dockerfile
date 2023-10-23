FROM openjdk:8
EXPOSE 8088
ADD target/formation-0.0.1-SNAPSHOT.jar formation.jar
ENTRYPOINT ["java","-jar","formation.jar"]
