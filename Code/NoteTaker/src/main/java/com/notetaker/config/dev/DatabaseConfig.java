package com.notetaker.config.dev;


import javax.sql.DataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabase;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;

/**
 * For ease of use an embedded database is used
 */
@Configuration
@Profile("dev")
public class DatabaseConfig {


    /**
     * Embedded Database for default data
     * @return datasource for default database
     */
    public DataSource dataSource() {
        EmbeddedDatabaseBuilder builder = new EmbeddedDatabaseBuilder();
        EmbeddedDatabase db = builder.setType(EmbeddedDatabaseType.HSQL).addScript("sql/create-note.sql").addScript("sql/insert-note.sql")
                .build();
        return db;
    }


    @Bean
    public JdbcTemplate getJdbcTemplate() {
        return new JdbcTemplate(this.dataSource());
    }
}
