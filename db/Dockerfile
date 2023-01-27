FROM mysql

ENV MYSQL_ROOT_PASSWORD "1234"
ENV MYSQL_DATABASE "student_db"

EXPOSE 3306

COPY db.sql /docker-entrypoint-initdb.d