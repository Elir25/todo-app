drop table if exists todos;

CREATE TABLE todos (
  id       SERIAL PRIMARY KEY,
  tittle     VARCHAR(50) NOT NULL,
  todo_text  VARCHAR,
  todo_date DATE
);

INSERT INTO todos (tittle, todo_text, todo_date ) VALUES ('Buy a new TV','Go to the store and buy a new TV for my room','2021/05/20');
INSERT INTO todos (tittle, todo_text, todo_date ) VALUES ('Rent a car','rent a car for the holidays','2021/07/20');
INSERT INTO todos (tittle, todo_text, todo_date ) VALUES ('Send email','send that email to my boss','2021/07/13');

--bring the list of todos 
select* from todos;

--GET a todo by id 

select * from todos where id=1;

