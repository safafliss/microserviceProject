package tn.esprit.apigateway.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringCloudConfig {

    @Bean
    public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
        return builder.routes()
                .route(r -> r.path("/api/formations/**")
                        .uri("http://formation:8088/")
                )
                .route(r -> r.path("/api/candidats/**")
                        .uri("http://candidat:8081/")
                )
                .route(r -> r.path("/api/tests/**")
                        .uri("http://test:8090/")
                )
                .route(r -> r.path("/api/offre/**")
                        .uri("http://offre:8091/")
                )
                .route(r -> r.path("/api/contrat/**")
                        .uri("http://contrat:8092/")
                )
                .route(r -> r.path("/api/portfolio/**")
                        .uri("http://portfolio:8093/")
                )
                .route(r -> r.path("/user/**")
                        .uri("http://app:3000/")
                )
                
                .route(r -> r.path("/entretiens/**")
                        .uri("http://entretien:8094/") 
                )
                .route(r -> r.path("/apigateway/**") 
                        .uri("http://apigateway:8082/")
                )
                .build();
    }

}
