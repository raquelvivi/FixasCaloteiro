# 📑 Fichas Caloteiro

#### O Fichas Caloteiro é o front end do projeto, seu back end esta no repositorio: [Fichas Caloteiro Back](https://github.com/raquelvivi/FixasCaloteiroBack). É um aplicativo mobile focado no gerenciamento de fiados de pequenas e médias empresas. A ideia surgiu a partir de uma necessidade real de um mercado onde trabalhei (Kitanda do Vitor). No mercado, tudo era feito de forma muito informal e pouco prática, utilizando sempre um caderno e fichas avulsas para monitorar os fiados e realizar uma gestão básica.

#### Com o tempo, essa prática se tornou inviável devido à grande quantidade de fichas novas e ao descontrole financeiro geral. Com o aplicativo, tornou-se fácil monitorar o valor total das fichas e das compras, bem como o dinheiro “perdido” e a média de crescimento. Com poucos cliques, é possível modificar fichas, criar novas ou efetuar compras e pagamentos, mantendo sempre o histórico. Dessa forma, um trabalho que antes demorava até dois dias inteiros passou a ser feito em poucas horas, com muito mais dados acessíveis 24 horas por dia.

## 🛠️ Tecnologias Utilizadas
<div align="center">
<table border="0">
  <tr>
<td valign="top">

#### 🎨 Front-end / Mobile
<a href="https://github.com/search?q=user%3Araquelvivi+language%3AJavaScript"><img src="https://img.shields.io/badge/React%20Native-cc00b1.svg?logo=react&logoColor=white"></a>
<a href="https://github.com/search?q=user%3Araquelvivi+language%3AJavaScript"><img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-f72585.svg?logo=javascript&logoColor=white"></a>
<a href="https://github.com/search?q=user%3Araquelvivi+language%3ATypeScript"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-7209b7.svg?logo=typescript&logoColor=white"></a>
<a href="https://github.com/search?q=user%3Araquelvivi+language%3AExpo"><img alt="Expo" src="https://img.shields.io/badge/Expo-72cb26.svg?logo=expo&logoColor=white"></a>

</td>
<td valign="top">
   
#### 😶‍🌫️ Outros

<img src="https://img.shields.io/badge/Dark%20Mode-212529.svg?logo=darkreader&logoColor=white"> 
<img src="https://img.shields.io/badge/MVC-c625cc.svg"> 
<img src="https://img.shields.io/badge/Clean%20Code-822608.svg"> 
<img src="https://img.shields.io/badge/Validação%20de%20Dados-fffd70.svg"> 

<br/>

</td>
 </tr>
</table>
</div>

<br/><br/>

## 🚀 Executar

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

   <!-- Baixar Atualizações:
      npx eas update --branch production --platform android --message "melhor usabilidade"

      Gerar apk:
      eas build --platform android --profile preview
    -->

<br/><br/>
## 🖤 Imagens Black

<img width="300" height="1043" alt="image" src="https://github.com/user-attachments/assets/a12416cd-6cf2-4f57-af5d-dc24c8b658ef" />
<img width="300" height="1043" alt="image" src="https://github.com/user-attachments/assets/571bc625-7a77-4b44-aa68-f1f116b006c1" />
<img width="300" height="1043" alt="image" src="https://github.com/user-attachments/assets/ebb407c0-17fe-4ff8-9434-43d908152554" />
<img width="300" height="1043" alt="image" src="https://github.com/user-attachments/assets/852ba224-2f05-4883-870a-06f31355a422" />
<img width="300" height="1043" alt="image" src="https://github.com/user-attachments/assets/18bdbb0d-3616-4ce2-a6e9-62987118a8c8" />
<img width="300" height="1043" alt="image" src="https://github.com/user-attachments/assets/1d8b2369-677c-4bc6-9cfa-33031bda7949" /> 

## 🤍 Imagens White
<img width="300" height="1043" alt="image" src="https://github.com/user-attachments/assets/cfcb4445-6f9b-4152-8370-791a29a9669c" />
<img width="300" height="1043" alt="image" src="https://github.com/user-attachments/assets/1d8e0eed-16ed-4ad0-b9ed-c416f9d37a9d" /> 
<img width="300" height="1043" alt="image" src="https://github.com/user-attachments/assets/80936020-854a-4ed6-9c31-7758c92c0d59" />
<img width="300" height="1043" alt="image" src="https://github.com/user-attachments/assets/e0842b44-ef54-4acf-93ff-32b7a78976c0" /> 
<img width="300" height="1043" alt="image" src="https://github.com/user-attachments/assets/072ef379-1172-4f05-bcb8-523af893c275" /> 


## 🖼️ Figma

<img width="1077" height="637" alt="image" src="https://github.com/user-attachments/assets/0ec5ea3a-30c9-41e6-8a1a-a3eefda3db06" />

</br></br>

## Problemas
#### Neste projeto, enfrentei um desafio baseado no clássico "na minha máquina funciona". O aplicativo operava perfeitamente no computador e no Expo, mas o cenário mudou na transformação para APK. Durante a execução do APK, a tela dinâmica /pg/[id] não carregava corretamente: ao navegar para ela, o aplicativo exibia a mensagem “Carregando...” indefinidamente.

#### O erro não estava relacionado à navegação ou ao parâmetro id, mas sim às requisições HTTP feitas para o backend hospedado na Render. Enquanto no ambiente de teste tudo fluía, no ambiente real a história era outra. O próprio Android bloqueava a requisição HTTP, o que, consequentemente, impedia a resposta e o carregamento da tela. A solução foi rápida: substituir o HTTP por sua versão segura e criptografada, o HTTPS.

#### Com isso, aprendi que ambientes de desenvolvimento são mais permissivos e aceitam HTTP, enquanto em produção as restrições são maiores. Este episódio serve como um lembrete para mim mesma: mesmo tendo estudado protocolos como HTTP, HTTPS, UDP e TCP, acabei caindo na cilada de utilizar uma conexão não segura em um ambiente restrito.


</br></br>


## Futuro
#### Para o futuro, planejo criar uma página com informações como: quantidade de compras, quantidade de pagamentos, número de fichas, valor total de dinheiro preso, entre outros dados relevantes. Além disso, pretendo incorporar ao aplicativo Fixas Caloteiro um gerenciador de estoque e preços para o mesmo mercado.

#### Para isso, será melhor unificar os dois bancos de dados, pois assim será mais fácil modificar, por exemplo, o preço da banana diretamente pelo celular, fazendo com que o valor seja automaticamente atualizado em todos os computadores do mercado.
