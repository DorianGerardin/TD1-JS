function adapter_galerie(nom) {
         for(let i = 1; i <= 6; i++) {
           let image = document.getElementById('fleur' + i);
           image.src = 'img/fleurs/' + nom + '/' + nom + i + '.jpg';
           image.title = nom;
           image.alt = nom + i;
         }
         adapter_titre(nom);
        }

        function cacher(im) {
          im.classList.add('cachee');
          im.classList.remove('visible');
        }

        function afficher(im) {
          im.classList.add('visible');
          im.classList.remove('cachee');
        }

        function suivant(n) {
          return (n == 6 ? 1 : n+1); 
        }

        function change_baniere_v1() {
          let baniere = document.getElementsByClassName('visible')[0];
          let id = baniere.id * 1;
          let idSuivant = suivant(id);
          cacher(baniere);
          let baniereSuivante = document.getElementById(idSuivant);
          afficher(baniereSuivante);
        }

        function change_baniere_v2() {
          let baniere = document.getElementsByClassName('visible')[0];
          let id = baniere.id * 1;
          let idSuivant = suivant(id);
          baniere.style.transition = "opacity 3s";
          cacher(baniere);
          let baniereSuivante = document.getElementById(idSuivant);
          afficher(baniereSuivante);
        }

        function adapter_titre(nom) {
          let titre = document.getElementById('titre');
          titre.innerHTML = tabTitres[nom]; 
        }

        function stopper_defilement() {
          clearInterval(chb);
        }

        function lancer_defilement() {
          chb = setInterval(change_baniere_v2,6000);
        }

        function construit_infobulle() {
           let info = document.createElement('div');
           info.innerHTML = "<p>c'est moi la bulle !</p>";
           info.id = "bulle";
           info.style.position = "fixed";
           info.style.top = "80px";
           info.style.right = "350px";
           info.style.backgroundColor = "AquaMarine";
           info.style.color = "BlueViolet";
           info.style.padding = "15px";
           info.style.borderRadius = "20px";
           info.style.boxShadow = "5px 5px 5px HotPink";
           document.body.appendChild(info);
         }

          function detruit_infobulle() {
             let info = document.getElementById('bulle');
             document.body.removeChild(info);
          }

          function entierAleatoire(min, max)
            {
             return Math.floor(Math.random() * (max - min + 1)) + min;
            }

          function changer_parametres() {
            var entier = entierAleatoire(1, 4);
            let body = document.body;
            body.style.backgroundImage = "url(" + "img/background/bg-" + entier + ".jpg" + ")";
          }

        let chb = setInterval(change_baniere_v2,6000);
        
        let tabTitres = {
         'rose' : 'Galerie de roses',
         'hortensia': 'Galerie d\’hortensias',
         'fruitier': 'Galerie de fruitiers',
         'autre': 'Galerie de fleurs diverses'
         };