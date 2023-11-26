function totalOfVictoriesAndDefeats(victory, defeats) {
    return victory - defeats
  }
  
  let total = totalOfVictoriesAndDefeats(80, 20)
  
  let nomeDoHeroi = "Ryxz"
   
        if (total > 0 && total <=10) {
          resultOfRankingOfHeroi = "Ferro";
          console.log("O Herói " + nomeDoHeroi + ", tem um saldo total de " + total + " vitórias, e está no nível de " + resultOfRankingOfHeroi + " no Ranking Global.");
        }
        if (total > 11 && total <=20) {
          resultOfRankingOfHeroi = "Bronze";
          console.log("O Herói " + nomeDoHeroi + ", tem um saldo total de " + total + " vitórias, e está no nível de " + resultOfRankingOfHeroi + " no Ranking Global.");
        }
        if (total > 21 && total <=50) {
          resultOfRankingOfHeroi = "Prata";
          console.log("O Herói " + nomeDoHeroi + ", tem um saldo total de " + total + " vitórias, e está no nível de " + resultOfRankingOfHeroi + " no Ranking Global.");
        }
        if (total > 51 && total <=80) {
          resultOfRankingOfHeroi = "Ouro";
          console.log("O Herói " + nomeDoHeroi + ", tem um saldo total de " + total + " vitórias, e está no nível de " + resultOfRankingOfHeroi + " no Ranking Global.");
        }
        if (total > 81 && total <=90) {
          resultOfRankingOfHeroi = "Diamante";
          console.log("O Herói " + nomeDoHeroi + ", tem um saldo total de " + total + " vitórias, e está no nível de " + resultOfRankingOfHeroi + " no Ranking Global.");
        }
        if (total > 91 && total <=100) {
          resultOfRankingOfHeroi = "Lendário";
          console.log("O Herói " + nomeDoHeroi + ", tem um saldo total de " + total + " vitórias, e está no nível de " + resultOfRankingOfHeroi + " no Ranking Global.");
        }
        if (total >=100) {
          resultOfRankingOfHeroi = "Imortal";
          console.log("O Herói " + nomeDoHeroi + ", tem um saldo total de " + total + " vitórias, e está no nível de " + resultOfRankingOfHeroi + " no Ranking Global.");
        }
  