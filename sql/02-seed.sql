USE `monitoria`;

SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE `products`;

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO
    monitoria.products (name)
VALUES ("Martelo de Thor"),
    ("Traje de encolhimento"),
    ("Escudo do Capitão América");