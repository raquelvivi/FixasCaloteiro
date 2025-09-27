-- ==============================
-- FUNCIONÁRIOS
-- ==============================
INSERT INTO funcio (nome, login, senha, tipo) VALUES
('Ana Souza', 'ana01', '12345', 'caixa'),
('Carlos Silva', 'carlos02', '12345', 'vendedor'),
('Mariana Lima', 'mariana03', '12345', 'gerente'),
('Pedro Oliveira', 'pedro04', '12345', 'vendedor'),
('Fernanda Costa', 'fer05', '12345', 'caixa'),
('Lucas Almeida', 'lucas06', '12345', 'estoquista'),
('Juliana Ramos', 'juliana07', '12345', 'vendedor'),
('Ricardo Santos', 'ricardo08', '12345', 'caixa'),
('Beatriz Fernandes', 'bia09', '12345', 'vendedor'),
('João Mendes', 'joao10', '12345', 'gerente');

-- ==============================
-- CLIENTES FIXA
-- ==============================
INSERT INTO fixa (nome, apelido, logradouro, numero, bairro, creditomax, datapaga, tipofoto) VALUES
('Maria da Silva', 'Maria', 'Rua das Flores', '101', 'Centro', 500.00, 10, 'jpg'),
('José Almeida', 'Zé', 'Av. Brasil', '202', 'Jardim', 300.00, 15, 'png'),
('Paulo Ferreira', 'Paulinho', 'Rua A', '33', 'Industrial', 200.00, 5, 'jpg'),
('Ana Paula', 'Aninha', 'Rua B', '44', 'Centro', 400.00, 20, 'png'),
('Fernanda Rocha', 'Nanda', 'Rua C', '55', 'Jardim', 350.00, 12, 'jpg'),
('Carlos Eduardo', 'Cadu', 'Av. Paulista', '66', 'Comercial', 800.00, 25, 'png'),
('Julio César', 'Julinho', 'Rua D', '77', 'Centro', 600.00, 8, 'jpg'),
('Patrícia Gomes', 'Pati', 'Rua E', '88', 'Industrial', 250.00, 18, 'png'),
('Ricardo Martins', 'Rica', 'Rua F', '99', 'Jardim', 700.00, 30, 'jpg'),
('Beatriz Souza', 'Bia', 'Av. Sul', '111', 'Centro', 450.00, 22, 'png');

-- ==============================
-- COMPRAS
-- ==============================
INSERT INTO compra (dia, total, apagar, tipopag, idfuncio, idfixa) VALUES
('2025-09-01', 120.50, 50.00, 'Dinheiro', 1, 1),
('2025-09-02', 250.00, 0.00, 'Cartão', 2, 2),
('2025-09-03', 80.00, 20.00, 'Fiado', 3, 3),
('2025-09-04', 300.00, 150.00, 'Pix', 4, 4),
('2025-09-05', 60.00, 0.00, 'Dinheiro', 5, 5),
('2025-09-06', 500.00, 200.00, 'Cartão', 6, 6),
('2025-09-07', 75.00, 25.00, 'Fiado', 7, 7),
('2025-09-08', 150.00, 0.00, 'Pix', 8, 8),
('2025-09-09', 400.00, 100.00, 'Cartão', 9, 9),
('2025-09-10', 90.00, 0.00, 'Dinheiro', 10, 10);
