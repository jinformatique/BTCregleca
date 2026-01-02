export default function FAQ() {
  return (
    <div className="min-h-screen bg-[#FFEFEA]">
      <div className="max-w-[42rem] mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="font-serif text-5xl font-bold text-[#014932] mb-4">
            Questions Fréquemment Posées
          </h1>
          <p className="text-lg text-[#395144]">
            Dernière version disponible sur{' '}
            <a
              href="https://github.com/aoeu10/BTCFixesThis/releases"
              className="text-[#014932] underline hover:text-[#395144] transition-colors"
            >
              GitHub
            </a>
          </p>
        </header>

        <nav className="mb-12 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-[#014932] mb-4">Table des Matières</h2>
          <ul className="space-y-2 text-[#395144]">
            <li><a href="#quest-ce-que-bitcoin" className="hover:text-[#014932] transition-colors">Qu'est-ce que Bitcoin?</a></li>
            <li><a href="#quest-ce-que-largent" className="hover:text-[#014932] transition-colors">Qu'est-ce que l'argent?</a></li>
            <li><a href="#comment-bitcoin-sintegre" className="hover:text-[#014932] transition-colors">Comment Bitcoin s'intègre-t-il dans le système monétaire?</a></li>
            <li><a href="#pourquoi-bitcoin-est-necessaire" className="hover:text-[#014932] transition-colors">Pourquoi Bitcoin est-il nécessaire?</a></li>
            <li><a href="#comment-fonctionne-bitcoin" className="hover:text-[#014932] transition-colors">Comment fonctionne Bitcoin?</a></li>
            <li><a href="#bitcoin-et-environnement" className="hover:text-[#014932] transition-colors">Bitcoin n'est-il pas mauvais pour l'environnement?</a></li>
            <li><a href="#bitcoin-vs-cryptomonnaies" className="hover:text-[#014932] transition-colors">En quoi Bitcoin diffère-t-il des autres "cryptomonnaies"?</a></li>
            <li><a href="#volatilite-bitcoin" className="hover:text-[#014932] transition-colors">Bitcoin n'est-il pas extrêmement volatile?</a></li>
            <li><a href="#prix-futur-bitcoin" className="hover:text-[#014932] transition-colors">Quel sera le prix de Bitcoin à l'avenir?</a></li>
            <li><a href="#allocation-bitcoin" className="hover:text-[#014932] transition-colors">Combien devrais-je allouer à Bitcoin?</a></li>
            <li><a href="#obtenir-bitcoin" className="hover:text-[#014932] transition-colors">Où puis-je obtenir du bitcoin?</a></li>
            <li><a href="#stockage-froid" className="hover:text-[#014932] transition-colors">Qu'est-ce que le stockage à froid et pourquoi devrais-je y placer mes bitcoins?</a></li>
            <li><a href="#utiliser-bitcoin" className="hover:text-[#014932] transition-colors">Comment utiliser bitcoin?</a></li>
            <li><a href="#quest-ce-que-lightning" className="hover:text-[#014932] transition-colors">Qu'est-ce que Lightning?</a></li>
            <li><a href="#portefeuilles-lightning" className="hover:text-[#014932] transition-colors">Quels portefeuilles Lightning recommandez-vous?</a></li>
            <li><a href="#bible-et-bitcoin" className="hover:text-[#014932] transition-colors">Que dit la Bible sur Bitcoin?</a></li>
            <li><a href="#dons-bitcoin-eglise" className="hover:text-[#014932] transition-colors">Que se passe-t-il lorsque j'envoie du bitcoin à l'église?</a></li>
            <li><a href="#dons-deductibles" className="hover:text-[#014932] transition-colors">Les dons en bitcoin sont-ils déductibles d'impôt?</a></li>
            <li><a href="#en-savoir-plus" className="hover:text-[#014932] transition-colors">Où puis-je en savoir plus?</a></li>
            <li><a href="#livres-recommandes" className="hover:text-[#014932] transition-colors">Avez-vous des livres à recommander?</a></li>
            <li><a href="#references" className="hover:text-[#014932] transition-colors">Références</a></li>
            <li><a href="#notes" className="hover:text-[#014932] transition-colors">Notes de bas de page</a></li>
          </ul>
        </nav>

        <main className="space-y-12">
          <section id="quest-ce-que-bitcoin" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Qu'est-ce que Bitcoin?</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Bitcoin est une forme de monnaie numérique pair-à-pair. Des tentatives de création de monnaie numérique ont été faites dans le passé, mais Bitcoin est la première à avoir réussi.
              </p>
              <p>
                Pour comprendre Bitcoin, vous devez comprendre l'argent.
              </p>
            </div>
          </section>

          <section id="quest-ce-que-largent" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Qu'est-ce que l'argent?</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Les premiers peuples pratiquaient le troc. Disons que vous cultivez des pommes et que votre voisin est pêcheur. Vous échangez un certain nombre de pommes contre son poisson. Cependant, que se passe-t-il si vous n'avez que des pommes et que votre cordonnier ne veut que du poisson pour le moment? Vous devrez d'abord échanger le nombre de pommes avec votre voisin afin d'obtenir suffisamment de poisson pour échanger avec le cordonnier. Et si le voisin avec le poisson ne veut pas échanger ou n'a pas assez de poisson? Il y a une coïncidence des désirs.
              </p>
              <p>
                Le troc fonctionne encore aujourd'hui mais est très inefficace dans les grandes économies.
              </p>
              <p>
                Les grandes économies nécessitent une monnaie qui n'a pas d'autre utilité que d'être valorisée comme argent. L'argent utilisé à grande échelle ne doit pas pouvoir être consommé ou utilisé autrement que pour sa capacité à coordonner l'échange de biens ou de services.
              </p>
              <p>
                Fondamentalement, l'argent doit être une bonne réserve de valeur.
              </p>
              <p>
                Tiré de l'excellent article de Vijay Boyapati intitulé{' '}
                <a
                  href="https://vijayboyapati.medium.com/the-bullish-case-for-bitcoin-6ecc8bdecc1"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  The Bullish Case for Bitcoin
                </a>
                , une réserve de valeur idéale devrait être:
              </p>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li><strong>Durable:</strong> ne doit pas être périssable ou facilement destructible. La nourriture, par conséquent, n'est pas une bonne réserve de valeur car elle se détériore.</li>
                <li><strong>Portable:</strong> doit être facile à transporter et à stocker contre la perte ou le vol. Les pommes sont assez faciles à transporter en petites quantités, mais si vous achetez un article plus gros, la quantité nécessaire serait ingérable.</li>
                <li><strong>Fongible:</strong> un article du bien doit être interchangeable avec un autre. Il ne devrait y avoir aucune différence de qualité entre les articles.</li>
                <li><strong>Vérifiable:</strong> le bien doit être facile à identifier comme authentique.</li>
                <li><strong>Divisible:</strong> le bien doit être facile à subdiviser.</li>
                <li><strong>Rare:</strong> le bien ne doit pas être abondant ou facile à créer.</li>
                <li><strong>Historique établi:</strong> plus le bien est perçu comme ayant été précieux longtemps, plus son attrait comme réserve de valeur est grand.</li>
                <li><strong>Résistant à la censure:</strong> quelle est la difficulté pour un tiers d'empêcher le propriétaire du bien de l'utiliser?</li>
              </ol>
              <p>
                L'or a historiquement servi à cette fin. Il correspond à de nombreuses caractéristiques d'une bonne réserve de valeur. Les gouvernements pendant des milliers d'années ont émis leurs devises adossées à l'or ou à d'autres métaux rares pour beaucoup des raisons ci-dessus.
              </p>
              <p>
                Cependant, l'un des principaux problèmes de l'or est qu'il est difficile à transporter en grande quantité. Il n'est pas portable. Il est lourd et le transport de grandes quantités est lent et coûteux.
              </p>
              <p>
                En raison du besoin de transacter rapidement et sur de longues distances, les banques ont été développées pour agir comme un tiers de confiance afin que vous puissiez transiger avec des représentations de l'or disponible que vous aviez à la banque.
              </p>
              <p>
                Plutôt que de vous payer 2 unités d'or en coupant physiquement un petit morceau d'or, je pourrais simplement dire à ma banque de changer la propriété de ces deux unités à vous.
              </p>
              <p>
                Nous n'aurions jamais à interagir avec l'or qui soutient la monnaie.
              </p>
              <p>
                Cela nous oblige à faire confiance aux registres des banques. Dans un système de réserves complètes, tous les certificats papier qui représentent l'or stocké à la banque sont échangeables.
              </p>
              <p>
                Finalement, les banques et les gouvernements ont réalisé qu'ils pouvaient émettre plus de papier-monnaie qu'il n'existe en or physique. C'était similaire à ce qui s'est passé lorsque la monnaie elle-même était la pièce d'or. Les gouvernements attribuaient la même valeur à la pièce mais diminuaient petit à petit la quantité d'or que la pièce avait. Ils pouvaient le faire soit en changeant la façon dont ils pesaient la pièce, en coupant de petits morceaux des pièces, ou en changeant la formulation des pièces pour contenir un pourcentage moindre d'or. C'est effectivement la même chose que d'imprimer plus de certificats papier qui n'ont aucun soutien réel.
              </p>
              <p>
                Actuellement, les principales devises sont toutes appelées monnaie fiduciaire. Fiat vient du latin signifiant "qu'il en soit fait." Malgré ce que vous pourriez encore penser, les devises fiduciaires, y compris le dollar américain, ne sont plus adossées à l'or ou à l'argent.
              </p>
              <p>
                En 1971, Nixon a retiré les États-Unis (et effectivement le reste du monde) de l'étalon-or. À partir de ce moment, le dollar américain est devenu une monnaie fiduciaire. Il n'avait plus de convertibilité en or ou en autres métaux précieux.
              </p>
              <p>
                Lorsque les gouvernements financent des projets par la création de monnaie, la valeur de chaque unité de monnaie baisse. Il y a eu un certain nombre d'{' '}
                <a
                  href="https://en.wikipedia.org/wiki/Hyperinflation"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  exemples d'hyperinflation
                </a>
                {' '}dans l'histoire récente.
              </p>
              <p>
                Les États-Unis ne sont pas non plus à l'abri de l'inflation, comme vous pouvez probablement le constater par le coût de vos courses ou par la façon dont les revenus n'ont pas suivi le prix de l'immobilier. Les jeunes adultes d'aujourd'hui sont presque sur le point d'être exclus de la possibilité d'acheter une maison. L'accession à la propriété se fait beaucoup plus tard dans la vie que la génération de nos parents. C'est peut-être l'une des raisons pour lesquelles les jeunes familles choisissent de retarder la naissance d'enfants.
              </p>
              <p>
                Une maison de 500 000 $ aujourd'hui équivaudrait à une maison de 165 000 $ il y a 40 ans. Ce calculateur d'inflation peut être ajusté vous-même sur{' '}
                <a
                  href="https://www.usinflationcalculator.com/"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  https://www.usinflationcalculator.com/
                </a>
                {' '}et sous-estime probablement l'inflation réelle car il s'appuie sur les données de l'indice des prix à la consommation (IPC) publiées par le gouvernement américain. Les calculs derrière l'IPC ont été ajustés au fil des ans et l'inflation réelle est probablement beaucoup plus élevée.
              </p>
            </div>
          </section>

          <section id="comment-bitcoin-sintegre" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Comment Bitcoin s'intègre-t-il dans le système monétaire?</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Bitcoin a été lancé dans le monde par une personne pseudonyme qui se fait appeler Satoshi Nakamoto. Satoshi a publié le code pour que tout le monde puisse l'exécuter. Il possède bon nombre des mêmes valeurs qui font de l'or une bonne monnaie, mais comme il est numérique, il est infiniment divisible et peut être envoyé n'importe où très rapidement et à très faible coût.
              </p>
              <p>
                Bitcoin est un registre immuable qui garde la trace de la propriété des unités de monnaie appelées bitcoin. Chaque bitcoin est divisible en unités appelées satoshis (sats). Il y a 100 millions de sats par bitcoin.
              </p>
              <p>
                Au moment de cette publication, le bitcoin était évalué à environ 61 000 USD par bitcoin (BTC). 1 USD achète 1 640 sats.
              </p>
              <p>
                Tout comme les banques ont historiquement agi comme un registre de confiance, bitcoin est un registre où tout le monde a la même copie et un tiers n'est plus nécessaire.
              </p>
              <p>
                Bitcoin est de l'argent énergétique. Il est littéralement soutenu par le minage qui utilise de l'électricité pour sécuriser la blockchain (voir ci-dessous pour plus d'informations sur le fonctionnement de bitcoin). Bitcoin est le réseau informatique le plus sécurisé jamais créé. Il fonctionne comme la couche de base sur laquelle des couches financières supplémentaires sont et seront construites.
              </p>
              <p>
                Une propriété unique de Bitcoin est qu'il s'agit de l'actif le plus rare au monde. Il est publié selon un calendrier fixe et plus jamais ne peut être imprimé. Satoshi a conçu le système de sorte qu'autour de l'année 2140, le dernier bitcoin sera miné, ce qui donnera un peu moins de 21 millions de bitcoins qui seront jamais créés. Il a actuellement un taux d'inflation d'environ 0,84%, qui passera en 2028 à 0,41%.
              </p>
              <p>
                Une différence unique entre Bitcoin et tous les autres actifs de valeur dans le monde, comme l'or, est que lorsque la demande augmente et que son prix monte, on ne peut pas en miner davantage. S'il n'est pas économique de miner de l'or à 2 000 $/once, alors si l'or bondissait à 4 000 $/once, de nouvelles zones s'ouvriraient soudainement au minage. Cela ne se produit pas avec Bitcoin. La quantité de bitcoin en existence est publiée selon un calendrier fixe.
              </p>
            </div>
          </section>

          <section id="pourquoi-bitcoin-est-necessaire" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Pourquoi Bitcoin est-il nécessaire?</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Lorsque vous gagnez des dollars ou toute autre devise fiduciaire, vous échangez votre temps précieux contre un jeton qui reflète la valeur du travail que vous avez effectué. Nous échangeons nos contributions à la société, notre énergie sous une forme abstraite, et gagnons de l'argent. Cela résout la coïncidence des désirs car les jetons gagnés sont valorisés par tout le monde dans la société. Le problème est que sans votre faute, le temps que vous avez travaillé pour gagner cet argent vous est lentement volé. Au fur et à mesure que le gouvernement imprime de plus en plus d'argent, cet argent est de moins en moins valorisé. Le gouvernement vole effectivement de notre futur. Même l'inflation "cible" de 2% signifie que si vous gardiez votre argent sous le lit, dans 35-36 ans, il vaudrait la moitié de ce qu'il valait.
              </p>
              <p>
                Imaginez le scénario où quelqu'un travaille dur toute sa vie et économise ces dollars. À la retraite, il essaiera de racheter tout ce travail acharné qu'il pensait avoir stocké dans ces dollars. Ce qu'il réalisera, c'est qu'il a gaspillé la moitié de sa vie à travailler pour rien grâce au gouvernement qui le vole lentement par l'inflation.
              </p>
              <p>
                L'inflation est une taxe relativement cachée dans les pays occidentaux plus stables en raison de son taux plus faible, mais elle est trop courante dans les pays moins développés du monde où l'inflation peut dépasser 20-50% par an, voire plus en situation d'hyperinflation.
              </p>
              <p>
                Pour couronner le tout, lorsque vous dépensez votre argent gonflé, le gouvernement s'attend à ce que vous payiez des impôts sur tout. Taxe lorsque vous le gagnez et taxes supplémentaires sur tout profit d'investissement, même si tout ce que vous avez fait était de suivre les effets de l'inflation.
              </p>
              <p>
                L'inflation serait moins un problème si les salaires suivaient l'inflation, mais ce n'est pas le cas. Vraiment, la seule chose qui a permis aux plus riches du pays de ne pas être autant affectés par l'inflation est leur capacité à gagner suffisamment pour pouvoir investir le reste dans des actifs comme l'immobilier ou les actions. Ces deux options ont historiquement été des endroits décents pour garer votre argent jusqu'à ce que vous en ayez besoin. Ils sont considérés comme des investissements plus risqués. Nous ne devrions pas être forcés de placer notre argent durement gagné dans des investissements risqués juste pour avoir une chance de battre l'inflation. Quelqu'un qui travaille dur toute sa vie et stocke son travail acharné en espèces ne devrait pas être pénalisé. C'est l'une des principales raisons de l'écart de richesse: le fait que les plus riches sont capables de prendre le risque de détenir tout sauf des espèces. L'écart de richesse n'est pas parce que les riches ne sont pas assez imposés; c'est une attitude socialiste à mon avis qu'ils ne paient pas leur juste part.
              </p>
              <p>
                Comme on dit, bitcoin résout cela. En épargnant en bitcoin plutôt qu'en espèces, vous choisissez d'épargner dans un système qui n'est pas inflationniste. Un système qui a une offre fixe qu'un gouvernement ne peut pas choisir de créer davantage sur un coup de tête. Un système qui vous récompense juste en le détenant.
              </p>
              <p>
                Bitcoin est un rappel qu'une monnaie peut exister sans inflation. Sans que le gouvernement nous vole lentement.
              </p>
              <p>
                Les actions et l'immobilier ne disparaîtront pas, mais leur but actuel en tant que moyen de s'assurer que vous ne perdez pas de valeur en raison de l'inflation diminuera à mesure que bitcoin continuera à devenir plus précieux. Les investissements futurs devront être faits sur la base de si vous êtes prêt à vous séparer de votre bitcoin pour cet investissement.
              </p>
              <p>
                Une transition vers Bitcoin encouragera les entreprises à produire des produits de meilleure qualité. Nous vivons actuellement dans l'état d'esprit fiduciaire que nous devons constamment consommer des biens et des services. Pourquoi garder notre argent pour l'avenir quand il vaudra simplement moins. Nous ferions mieux de le dépenser maintenant car alors nous aurions au moins quelque chose de tangible. Dans un monde bitcoin, les entreprises rivaliseraient sur la qualité car elles se battraient pour savoir où nous dépenserions notre précieux bitcoin.
              </p>
              <p>
                Pour continuer sur le thème de bitcoin étant de l'argent énergétique, considérons le prix du bitcoin en termes de barils de pétrole.
              </p>
              <p>
                Fin août 2024, 1 BTC vous rapporte 785 barils de pétrole (81 $/baril). C'est en hausse par rapport aux 309 barils de pétrole il y a un an, une augmentation du pouvoir d'achat de votre bitcoin en termes de pétrole de 154%. L'indice S&P 500 est passé de 4 433 à 5 613 sur cette même période d'un an, une augmentation de 26,6%. En termes de pétrole, le S&P peut vous acheter 31,2% de pétrole en plus maintenant qu'il y a un an.
              </p>
              <p className="text-sm">
                <a
                  href="https://coincodex.com/convert/usd/crude-oil-brent"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  https://coincodex.com/convert/usd/crude-oil-brent
                </a>
                <br />
                <a
                  href="https://coincodex.com/convert/bitcoin/crude-oil-brent"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  https://coincodex.com/convert/bitcoin/crude-oil-brent
                </a>
              </p>
            </div>
          </section>

          <section id="comment-fonctionne-bitcoin" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Comment fonctionne Bitcoin?</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Lorsque le réseau bitcoin a été mis en marche pour la première fois en 2009, il n'y avait aucune incitation financière à acquérir du bitcoin. En fait, un simple ordinateur que n'importe qui avait à la maison suffisait pour "miner" des centaines de bitcoins. Le coût du minage est le coût de l'électricité et de l'acquisition du matériel pour le faire.
              </p>
              <p>
                Bitcoin est initialement distribué par ce processus de minage. Environ toutes les 10 minutes, un bloc est trouvé. Le bloc qui correspond à un certain modèle est déclaré gagnant et peut ajouter son bloc de transactions à la chaîne. Chaque bloc suivant se produit environ toutes les 10 minutes et ajoute des transactions supplémentaires pour former une chaîne connectée de blocs. Les transactions proviennent de n'importe qui dans le monde interagissant avec le réseau bitcoin. Le réseau a été conçu pour se corriger lui-même afin de garantir qu'au fil du temps, le taux de 10 minutes par bloc soit cohérent. Cette auto-correction se produit grâce à un ajustement de difficulté programmé dans le code et ne nécessite aucune intervention humaine. Tous les 2 016 blocs ou environ toutes les 2 semaines, la difficulté s'ajustera pour s'assurer que les blocs se rapprochent de la marque des 10 minutes.
              </p>
              <p>
                L'incitation à miner est que le gagnant du bloc est récompensé en bitcoin. Les premiers 210 000 blocs (environ 4 ans) ont été récompensés de 50 bitcoins par bloc. Tous les 210 000 blocs, le réseau passe par ce qu'on appelle un halving où la récompense de bloc est réduite de moitié. 25 bitcoins par bloc, puis 12,5 par bloc, 6,25 par bloc, et finalement le halving que nous venons de vivre où chaque bloc reçoit une récompense de 3,125 bitcoins par bloc. Ce sont ces cycles de halving qui garantissent que le dernier bitcoin sera miné vers l'année 2140.
              </p>
              <p>
                Lorsque vous envoyez du bitcoin sur le réseau bitcoin, vous choisissez un taux de frais que vous êtes prêt à payer pour que votre transaction soit incluse dans le prochain bloc. Les mineurs peuvent choisir les transactions qu'ils veulent inclure. Au fur et à mesure que bitcoin est utilisé de plus en plus, le coût d'envoi des transactions augmentera car les gens sont prêts à payer plus pour leurs transactions.
              </p>
              <p>
                Pendant les périodes d'utilisation élevée, le réseau de chaîne principale bitcoin peut devenir assez coûteux. Des couches supplémentaires sont construites au-dessus de Bitcoin qui permettent des transactions presque instantanées pour une fraction du coût qui ont toujours un règlement final, en s'appuyant sur la sécurité du réseau bitcoin complet. La couche 2 la plus populaire et qui est développée comme le langage de la principale couche de paiement pour bitcoin s'appelle Lightning. Lightning est le langage par lequel la plupart des gens interagiront avec bitcoin pour leurs transactions quotidiennes.
              </p>
              <p>
                Pour plus d'informations sur l'utilisation de Lightning, veuillez consulter la question ci-dessous.
              </p>
            </div>
          </section>

          <section id="bitcoin-et-environnement" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Bitcoin n'est-il pas mauvais pour l'environnement?</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                L'une des principales campagnes contre Bitcoin a été menée par{' '}
                <a
                  href="https://www.greenpeace.org/usa/campaigns/clean-up-bitcoin/"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  Greenpeace
                </a>
                {' '}et est financée par un concurrent de Bitcoin. L'affirmation est que la consommation d'énergie de Bitcoin est mauvaise pour l'environnement.
              </p>
              <p>
                Premièrement, combien d'électricité bitcoin utilise-t-il? En 2021, il a été déclaré que bitcoin utilise 0,55% de la production mondiale d'électricité, soit à peu près l'équivalent de petits pays comme la Malaisie ou la Suède. Au fur et à mesure que le réseau a gagné en force et en utilisation au cours des dernières années, ce nombre a continué d'augmenter.
              </p>
              <p>
                Si vous pensez que bitcoin n'a aucune utilité, alors peut-être que n'importe quelle quantité d'utilisation d'électricité est trop. Cependant, la quantité d'électricité qui va dans bitcoin est directement proportionnelle au nombre de personnes utilisant bitcoin et à la façon dont ces personnes valorisent le bitcoin.
              </p>
              <p>
                Les entreprises et les individus qui minent bitcoin sont incités à trouver les formes d'énergie les moins chères car l'électricité à coût plus élevé gruge leurs profits. Par conséquent, la majorité du bitcoin miné aujourd'hui est miné par énergie renouvelable et encourage en fait la construction d'équipements de production d'énergie dans des régions du monde qui auraient autrement été bloquées sans la disponibilité d'énergie.
              </p>
              <p>
                Voici un exemple: Pourquoi une entreprise choisirait-elle de construire un barrage hydroélectrique au milieu de l'Afrique? Cela pourrait être à des fins humanitaires, mais l'incitation doit être au moins partiellement pour le profit afin que l'entreprise soit durable.
              </p>
              <p>
                La population qui bénéficierait directement d'avoir accès à une énergie propre et presque gratuite d'un barrage hydroélectrique ne serait pas en mesure de se le permettre. Avec bitcoin, ces barrages peuvent être construits et l'énergie pratiquement donnée à la population locale pour aider à améliorer leur qualité de vie tandis que tout excès d'énergie peut être utilisé par les mineurs pour miner du bitcoin.
              </p>
              <p>
                Il y a une raison d'augmenter l'abondance d'énergie dans le monde.
              </p>
              <p>
                Comme mentionné ci-dessus, bitcoin est littéralement de l'énergie qui est économisée sous forme numérique pour être soit dépensée en bitcoin soit convertie en un autre moyen d'échange dans le futur. Et rappelez-vous, c'est tout ce que l'argent est. Il ne devrait avoir aucune autre utilité que d'être une unité d'échange qui permet à deux personnes différentes d'échanger équitablement de la valeur.
              </p>
              <p>
                Voici un autre exemple montrant les avantages pour l'environnement de bitcoin. Disons qu'une communauté veut construire une centrale solaire. Elle a actuellement besoin de 50 MW pendant la journée mais aux heures de pointe pourrait nécessiter jusqu'à 75 MW. Vous ne pouvez pas construire une centrale solaire capable de 75 MW à moins d'avoir un endroit pour stocker l'excès d'énergie. Bitcoin peut agir comme une batterie énergétique. En choisissant de construire une centrale de 100 MW, cela garantirait que 50 MW seraient disponibles pour la communauté avec les autres 50 MW utilisés par les mineurs jusqu'à ce qu'il y ait une demande de la communauté pour une partie de cette énergie. Ensuite, c'est juste une question d'éteindre l'alimentation aux mineurs et soudainement cette énergie supplémentaire est disponible. Avant bitcoin, la communauté construirait une centrale de 50 MW et devrait ensuite allumer une centrale au gaz naturel ou au diesel polluante lorsque de l'énergie supplémentaire était nécessaire. Bitcoin résout cela. C'est en fait meilleur pour l'environnement.
              </p>
              <p>
                Enfin, un autre exemple: Les grandes décharges génèrent beaucoup de méthane. Tellement que beaucoup de ces sites l'utilisent pour alimenter leurs installations et même avec cela, l'excès de méthane doit être brûlé car le dioxyde de carbone généré par la combustion est bien meilleur pour l'environnement que de libérer du méthane direct. Bitcoin peut résoudre cela aussi en utilisant l'énergie générée par le carburant de méthane pour miner du bitcoin. Il peut convertir un produit de déchet précédent en argent.
              </p>
            </div>
          </section>

          <section id="bitcoin-vs-cryptomonnaies" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">En quoi Bitcoin diffère-t-il des autres "cryptomonnaies"?</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Bitcoin est une cryptomonnaie dans le sens où il utilise également la cryptographie (la technologie qu'Internet utilise pour le cryptage) pour créer et protéger les jetons bitcoin. Bitcoin est différent de la plupart en ce qu'il utilise un mécanisme de consensus appelé preuve de travail. L'autre mécanisme de consensus majeur est appelé preuve d'enjeu.
              </p>
              <p>
                Dans Bitcoin, la chaîne de transactions qui a le plus de travail investi est la vraie version. Ce travail est coûteux dans le sens où il y a beaucoup d'énergie utilisée pour trouver le prochain bloc. Cette énergie a des coûts réels qui ne peuvent pas être simplement dupliqués sur un coup de tête. Une façon facile d'y penser est que vous regardez quelqu'un qui est vraiment fort ou en forme. Vous pouvez voir physiquement le travail que cet individu a mis pour ressembler à ça. Ce n'est pas quelque chose qui peut juste être simulé.
              </p>
              <p>
                La deuxième cryptomonnaie la plus précieuse s'appelle Ethereum. Ethereum a commencé comme un concurrent de preuve de travail à Bitcoin mais a depuis changé de mécanismes de consensus vers un système appelé preuve d'enjeu. La preuve d'enjeu dit essentiellement que plus vous détenez de jetons, plus votre voix a de la valeur pour décider quelle est la bonne chaîne. Cela ne nécessite aucun travail réel, seulement plus de jetons Ethereum.
              </p>
              <p>
                Il y a aussi des centaines de milliers de cryptomonnaies là-bas. Certaines prétendent faire des choses spéciales. La plupart d'entre elles sont des arnaques pures et simples et n'ont aucun produit derrière elles. Les quelques-unes qui ont réellement un produit se heurtent au problème de comment l'offre du jeton est publiée. Rappelez-vous que bitcoin a un calendrier de publication fixe auquel n'importe qui aurait pu se joindre tôt.
              </p>
              <p>
                Beaucoup, y compris Ethereum, ont vendu leurs jetons à des investisseurs précoces (pour du bitcoin néanmoins!) avant même qu'ils n'atteignent le marché et se sont donné des millions de jetons. La raison pour laquelle tant de cryptomonnaies existent est que les créateurs pensent qu'ils peuvent convaincre les gens d'acheter leurs jetons ou faire monter le prix des jetons par la spéculation.
              </p>
              <p>
                Tous ces altcoins vont (ou sont allés) à zéro en termes de bitcoin. Habituellement, ceux qui "gagnent de l'argent" sont les fondateurs des altcoins, les échanges comme Coinbase ou Binance qui encouragent leur trading, et les personnes qui ont de la chance en achetant et vendant au bon moment.
              </p>
              <p>
                Voici un graphique de la dernière année d'Ethereum (la deuxième plus grande cryptomonnaie en capitalisation boursière) au prix du bitcoin:
              </p>
              <p className="text-sm italic text-gray-600">
                [Graphique montrant la dépréciation d'Ethereum par rapport à Bitcoin]
              </p>
              <p>
                Le but de Bitcoin n'est pas de devenir riche dans le sens fiduciaire, mais de créer une monnaie équitable que les gens peuvent utiliser pour transiger et stocker le travail d'aujourd'hui pour l'avenir dans une monnaie qui ne sera pas dévaluée au gré d'un gouvernement.
              </p>
            </div>
          </section>

          <section id="volatilite-bitcoin" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Bitcoin n'est-il pas extrêmement volatile?</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Lorsque bitcoin a été initialement développé, il n'avait aucune valeur. Finalement, les gens ont vu qu'il correspondait à de nombreuses définitions d'une bonne monnaie, il a gagné de la valeur et est maintenant l'un des actifs les plus précieux au monde. La volatilité va dans les deux sens, vers le haut comme vers le bas. Évidemment, ce que nous espérons, c'est une volatilité à la hausse. Historiquement, au cours de ses 15 ans d'existence, toute baisse du prix fiduciaire a été d'excellentes opportunités d'achat car sa tendance globale a été à la hausse.
              </p>
              <p>
                Fin août 2024, il est classé n° 10 dans le monde en termes de valeur de tous les actifs, y compris les entreprises publiques, les métaux précieux, les cryptomonnaies, les ETF.
              </p>
              <p>
                Parmi les métaux précieux, l'or est n° 1 avec une valeur en USD de 17,154 billions. L'argent est n° 8 à 1,686 billion. Et Bitcoin est n° 10 à 1,253 billion.
              </p>
              <p className="text-sm italic text-gray-600">
                [Image montrant le classement des actifs par capitalisation boursière]
              </p>
              <p>
                Oui, bitcoin a été volatil mais grandement à la hausse s'il est détenu pendant une période suffisamment longue. La volatilité diminuera avec le temps à mesure que l'actif deviendra plus précieux. La volatilité n'est également un facteur que lorsqu'elle est comparée à des devises fiduciaires plus stables comme le dollar américain à court terme.
              </p>
              <p>
                Bitcoin est très stable par rapport au pouvoir d'achat des devises subissant une hyperinflation. Je préférerais avoir la volatilité de bitcoin mais le taux de croissance annuel composé historiquement de 30%+ par an (voir les graphiques ci-dessous) au lieu du déclin lent et régulier du pouvoir d'achat du dollar américain.
              </p>
              <p>
                Un autre facteur affectant la volatilité est dû à la nature inélastique de Bitcoin. À mesure que la demande de bitcoin augmente, le prix doit augmenter car l'offre ne peut pas être augmentée.
              </p>
            </div>
          </section>

          <section id="prix-futur-bitcoin" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Quel sera le prix de Bitcoin à l'avenir?</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                C'est la question à 1 million de dollars. Ou peut-être devrions-nous dire la question à 15,7 BTC.
              </p>
              <p>
                Personne ne connaît cette réponse exactement. Mais vous pouvez presque dire avec certitude que sur une période suffisamment longue, il montera en prix fiduciaire. C'est la monnaie la plus pure au monde. Plus ne peut être imprimé, elle ne peut pas être dévaluée. Comme Michael Saylor l'a dit célèbrement:{' '}
                <a
                  href="https://www.youtube.com/watch?v=zTPoRDrtc0s"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  Il monte pour toujours, Laura.
                </a>
              </p>
              <p>
                Bien qu'on dise que la performance passée n'est pas indicative de la performance future, voici quelques graphiques et tableaux montrant comment bitcoin s'est comporté historiquement:
              </p>
              <p className="text-sm italic text-gray-600">
                [Graphiques historiques montrant la croissance du prix de Bitcoin au fil du temps]
              </p>
              <p>
                Bien que volatil, au fil du temps, il semble être une bien meilleure réserve de valeur en termes de maintien et de croissance du pouvoir d'achat que tout autre actif majeur ne l'a été.
              </p>
              <p>
                Michael Saylor a donné un{' '}
                <a
                  href="https://www.youtube.com/watch?v=mOne66vv2QU"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  discours d'ouverture
                </a>
                {' '}à la conférence Bitcoin à Nashville 2024 où il expose son cas pour Bitcoin jusqu'en 2045 (21 ans à partir de maintenant).
              </p>
              <p>
                Au moment de la présentation, Bitcoin représentait 0,1% du total des actifs mondiaux avec une capitalisation boursière de 1,3 T$ et un prix de 65 000 $.
              </p>
              <p>
                Le scénario baissier de Saylor place Bitcoin à 2% des actifs mondiaux en 2045 avec un prix fiduciaire de 3 millions de dollars par bitcoin. Capitalisation boursière de 68 T$.
              </p>
              <p>
                Scénario de base de 13 millions de dollars par bitcoin à 7% des actifs mondiaux et une capitalisation boursière de 280 T$.
              </p>
              <p>
                Scénario haussier de 49 millions de dollars par bitcoin à 22% des actifs mondiaux et une capitalisation boursière de 1 030 T$.
              </p>
            </div>
          </section>

          <section id="allocation-bitcoin" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Combien devrais-je allouer à Bitcoin?</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Cette question devrait être discutée avec l'aide de votre conseiller financier. Très probablement, votre conseiller financier vous conseillera de rester loin de bitcoin et des autres cryptomonnaies. Certains pourraient dire que vous pouvez mettre une petite somme dans bitcoin si vous avez une petite partie de votre portefeuille consacrée à "l'argent de jeu", tandis que d'autres pourraient suggérer une allocation de 1-2% d'emblée.
              </p>
              <p>
                Ce que vous ne voulez pas qu'il arrive, c'est que vous décidiez d'aller all-in avant de vraiment comprendre l'espace, subir un grand mouvement à la baisse, puis devenir désabusé avec Bitcoin. Une fois que vous êtes descendu dans le terrier du lapin, vous apprécierez alors une baisse des prix car elle vous permet d'acheter plus de bitcoin pour votre argent.
              </p>
              <p>
                Aujourd'hui, Bitcoin est toujours considéré comme un investissement risqué et, par conséquent, est assez volatil. Pour une discussion sur la volatilité de bitcoin, veuillez consulter la question ci-dessus. Il peut faire de grands mouvements à la hausse (ou à la baisse) en prix. En tant que tel, vous ne devriez pas mettre plus dans bitcoin que ce avec quoi vous êtes à l'aise. Bitcoin a historiquement fait des corrections de 80%. Il a toujours rebondi, mais vous devriez être préparé pour de grands mouvements à la baisse comme ceci.
              </p>
              <p>
                Le Nakamoto Portfolio a un outil appelé{' '}
                <a
                  href="https://nakamotoportfolio.com/nakamoto/start"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  Portfolio Analytics
                </a>
                {' '}où vous pouvez brancher votre allocation de portefeuille actuelle et voir quels auraient été les résultats de l'ajout de bitcoin. Vous pouvez également sélectionner parmi{' '}
                <a
                  href="https://nakamotoportfolio.com/apps/portfolio_explorer"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  les allocations de portefeuille prédéfinies communes
                </a>
                , telles que All Seasons ou le classique 60/40.
              </p>
              <p>
                Ce serait un bon outil à utiliser et à ajuster à votre niveau de tolérance au risque. Il est écrit dans un langage que les conseillers financiers comprendront et serait bon à partager avec eux.
              </p>
              <p>
                Pour moi, autre que d'avoir suffisamment de dollars américains disponibles pour payer les factures mensuelles, je me sens plus à l'aise d'avoir presque tout mon portefeuille en bitcoin car il devrait tendre vers le haut de manière assez significative; détenir le dollar américain est une perte garantie de pouvoir d'achat.
              </p>
            </div>
          </section>

          <section id="obtenir-bitcoin" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Où puis-je obtenir du bitcoin?</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                L'une des idées fausses sur Bitcoin est qu'il est devenu trop cher. Il est vrai que le prix pour 1 bitcoin a considérablement augmenté au fil de l'année, mais pour participer à la croissance future de Bitcoin, vous n'avez pas besoin de posséder des bitcoins entiers. Vous pouvez acheter moins d'un dollar de bitcoin, si vous le souhaitez!
              </p>
              <p>
                Voici quelques façons d'obtenir du bitcoin:
              </p>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>Échangez des biens ou des services contre. Si vous êtes propriétaire d'entreprise, envisagez d'offrir d'accepter bitcoin comme l'une des devises que vous prenez.</li>
                <li>Achetez du bitcoin avec de l'argent comptant à quelqu'un ou achetez du bitcoin sur une bourse avec votre compte chèque. Les bourses bitcoin populaires incluent Strike, River ou Swan.</li>
                <li>Parlez à quelqu'un d'enthousiaste à propos de bitcoin et il ou elle serait probablement heureux de vous aider à configurer un portefeuille Lightning et de vous envoyer quelques sats pour commencer.</li>
                <li>Achetez des mineurs bitcoin. C'est une discussion plus technique, mais vous pouvez participer matériellement à la recherche du prochain bloc bitcoin et obtenir les récompenses de minage pour cela. Comme la quantité d'énergie allant au minage a augmenté, le coût du minage a augmenté et à moins que vous compreniez dans quoi vous vous embarquez, s'en tenir à l'une des façons ci-dessus d'obtenir du bitcoin est beaucoup plus facile. Veuillez me contacter ci-dessous si vous avez un intérêt pour le minage de bitcoin.</li>
              </ol>
              <p>
                Coinbase, Kraken et Gemini sont d'autres bourses populaires. Vous pouvez également acheter du bitcoin ici, assurez-vous simplement de retirer votre bitcoin vers{' '}
                <a href="#stockage-froid" className="text-[#014932] underline hover:text-[#395144] transition-colors">
                  le stockage à froid
                </a>
                {' '}dès que possible. Idéalement, vous ne voulez pas garder de bitcoin sur une bourse car tant que le bitcoin n'est pas dans votre portefeuille personnellement contrôlé, le bitcoin n'est pas à vous. Vous ne voulez pas vous retrouver dans une situation où vous essayez de retirer votre bitcoin et la bourse vous arrête parce qu'ils sont insolvables. Cela s'est produit récemment à des endroits comme BlockFi, Celsius, et, ce qui était la plus grande bourse bitcoin au monde à l'époque, FTX.
              </p>
              <p>
                Je préfère NE PAS utiliser ces bourses non-bitcoin uniquement parce qu'elles sont passées de la simple vente de bitcoin à offrir de nombreuses autres pièces appelées familièrement altcoins. Elles gagnent de l'argent chaque fois que les gens échangent ces altcoins, comme Ethereum mentionné ci-dessus. Donc, plutôt que d'acheter et de conserver comme vous devriez le faire avec bitcoin, ces bourses vous encouragent à échanger souvent. Plus souvent vous échangez, plus elles gagnent de l'argent.
              </p>
              <p>
                Ce que vous devriez faire, c'est acheter du bitcoin puis le déplacer dans un stockage à froid dès que vous le pouvez. Parfois, il faut quelques jours à une semaine pour que votre argent déposé soit réglé, un vestige du système financier hérité.
              </p>
            </div>
          </section>

          <section id="stockage-froid" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Qu'est-ce que le stockage à froid et pourquoi devrais-je y placer mes bitcoins?</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Le stockage à froid est simplement un terme signifiant que vous devriez prendre l'auto-garde de votre bitcoin, le plus souvent en utilisant un appareil qui sécurise votre bitcoin qui n'est pas directement connecté à Internet. Tout ce qui touche Internet risque de pouvoir être plus facilement piraté. L'objectif est de contrôler les clés privées de votre bitcoin vous-même (aka auto-garde) et de ne pas faire confiance à un tiers. Bitcoin est un instrument au porteur que vous devriez prendre en auto-garde. Une autre façon d'y penser est si vous détenez physiquement de l'or dans votre coffre-fort à domicile (auto-garde) par opposition à faire confiance à votre or détenu dans une banque (garde par un tiers).
              </p>
              <p>
                La plupart des gens qui achètent leur bitcoin sur Coinbase détiennent probablement leur bitcoin sur Coinbase également. Coinbase aime cela car cela encourage le trading, c'est ainsi que Coinbase gagne son argent. Les bourses bitcoin uniquement vous encourageront à prendre le bitcoin en auto-garde. Si vous détenez votre bitcoin sur Coinbase ou toute bourse, alors cette bourse pourrait bloquer votre compte et restreindre l'accès à votre bitcoin.
              </p>
              <p>
                Ou si nous rencontrons à nouveau une situation FTX, votre bitcoin pourrait ne pas avoir été du vrai bitcoin en premier lieu. FTX vendait du bitcoin "papier" qui était simplement enregistré sur leurs propres registres. Lorsque tout le monde a essayé de retirer leur bitcoin de FTX, il n'y avait pas assez de vrai bitcoin disponible et FTX a été forcé à la faillite.
              </p>
            </div>
          </section>

          <section id="utiliser-bitcoin" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Comment utiliser bitcoin?</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                L'étape 1 devrait être de convertir autant de la monnaie dépréciative (fiduciaire) que vous pouvez en une monnaie qui ne peut jamais être dévaluée. Bitcoin est une menace pour le monopole du gouvernement sur l'argent et vous devriez vouloir en détenir autant que possible.
              </p>
              <p>
                Ensuite, il suffit de détenir ou comme disent les bitcoiners, HODL. Certaines personnes disent que cela signifie "hold on for dear life," mais c'était en fait une{' '}
                <a
                  href="https://www.coindesk.com/markets/2019/02/02/the-history-of-hodl/"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  faute d'orthographe sur un post Reddit
                </a>
                {' '}de 2013!
              </p>
              <p>
                De plus en plus d'entreprises commencent à accepter bitcoin. Mais jusqu'à ce que le monde passe au standard Bitcoin, la plupart des transactions dans la vie quotidienne seront en échangeant du bitcoin contre des dollars chaque fois que le besoin temporaire de plus de dollars se présente.
              </p>
              <p>
                Les deux façons les plus populaires d'utiliser bitcoin sont en envoyant des transactions sur la chaîne principale ("on-chain") ou en utilisant une solution de couche 2 appelée Lightning. Il existe des moyens custodial et non-custodial de faire les deux. Custodial est comme votre banque typique ou compte d'investissement. Vous avez accès à l'argent là-dessus tant que la banque ou la société d'investissement vous y laisse accéder. Si la banque décide de geler vos comptes, alors vous ne pouvez plus accéder à ces fonds car le dépositaire est celui qui est finalement en charge.
              </p>
              <p>
                Un exemple d'un dépositaire bitcoin serait d'utiliser une entreprise comme Strike. Vous branchez votre compte chèque et achetez du bitcoin. Tant que le bitcoin reste sur votre compte détenu par Strike, le bitcoin est sous leur garde. Si quelqu'un les forçait à envoyer votre bitcoin quelque part ou à geler votre compte, ils devraient se conformer. Strike et tous les dépositaires réputés vous permettent de retirer le bitcoin dans votre propre garde dès que les fonds sont réglés. Strike a la capacité d'envoyer et de recevoir des paiements Lightning ainsi que des paiements on-chain. Une fonctionnalité cool avec eux est que vous pouvez envoyer un paiement Lightning en utilisant des dollars. Il sera parfaitement converti en bitcoin et envoyé tandis que de votre côté, vous verrez juste des dollars sortir de votre compte chèque attaché.
              </p>
              <p>
                Non-custodial est plus communément appelé auto-custodial et signifie que vous êtes celui en charge de votre bitcoin. Si vous oubliez votre mot de passe, PIN, ou perdez les clés privées de votre bitcoin, il est parti pour toujours et personne ne pourra jamais aider à le récupérer.
              </p>
              <p>
                L'auto-garde vous permet également d'avoir accès à votre argent même dans les pays les plus oppressifs. Il est facile de mettre toute votre richesse en bitcoin et de quitter le pays pour recommencer une nouvelle vie ailleurs. La même chose ne peut pas être dite de l'argent comptant, de l'or ou de l'immobilier. Imaginez essayer de traverser la frontière en portant des sacs et des sacs d'argent ou des barres d'or. De petites quantités seraient bien mais de plus grandes quantités seraient impossibles à transporter en toute sécurité.
              </p>
              <p>
                Si les gens qui avaient détenu leur bitcoin dans FTX l'avaient plutôt déplacé immédiatement en auto-garde, la faillite de FTX ne les aurait pas affectés du tout. Toute bourse réputée devrait encourager sinon exiger le déplacement des pièces en auto-garde.
              </p>
              <p>
                Les organisations chrétiennes envoient du bitcoin comme monnaie de choix à leurs missionnaires à l'étranger. Beaucoup de ces missionnaires sont dans des régions du monde où il est difficile ou très coûteux d'envoyer des dollars américains ou même d'envoyer des dollars et de les faire convertir en monnaie locale. S'appuyer sur le système hérité signifie sauter à travers plusieurs couches. En plus des frais, le système hérité est également lent. En utilisant Bitcoin, ces organisations peuvent envoyer de grandes ou petites quantités de bitcoin presque instantanément n'importe où dans le monde. Les missionnaires peuvent alors dépenser le bitcoin selon leurs besoins ou convertir le bitcoin en monnaie locale à leur convenance.
              </p>
              <p>
                L'organisation Thank God For Bitcoin ({' '}
                <a
                  href="https://tgfb.com/"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  https://tgfb.com/
                </a>
                ) est une excellente ressource pour plus d'informations sur la façon dont d'autres églises utilisent bitcoin.
              </p>
              <p>
                Deux excellentes vidéos à ce sujet sont:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <a
                    href="https://youtu.be/7_1lBlnz8r8"
                    className="text-[#014932] underline hover:text-[#395144] transition-colors"
                  >
                    Funding Ministry in an Expensive Time & Place
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=sMeqRfjxnYc"
                    className="text-[#014932] underline hover:text-[#395144] transition-colors"
                  >
                    How Bitcoin Transforms Funding for Global Missions with Ahshuwah Hawthorne
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section id="quest-ce-que-lightning" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Qu'est-ce que Lightning?</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Lightning est une couche supplémentaire au-dessus du bitcoin de chaîne principale. Il peut être considéré comme une couche de paiement de bitcoin. Il permet un règlement presque instantané. Le bitcoin de chaîne principale fait référence au règlement sur le réseau Bitcoin avec un B majuscule. Actuellement, les frais sont assez bas mais lorsque la demande augmente, les frais pour transiger directement sur la chaîne principale augmentent et les petites transactions pourraient être lentes et/ou coûteuses. Le règlement final signifie que le bitcoin a été transféré au destinataire du bitcoin et ne peut pas être inversé. Cela prend généralement 10 minutes à une heure selon la taille de la transaction. Dans le système financier hérité, le réseau de carte de crédit facture aux commerçants des frais pour leur dire que la transaction est autorisée. Ces frais sont généralement un montant fixe plus un pourcentage. Les commerçants facturent soit cela directement à l'utilisateur de carte de crédit, soit l'incluent autrement dans le coût du produit. (C'est pourquoi certains magasins donnent des rabais pour les paiements en espèces ou limitent les paiements par carte de crédit à seulement des montants supérieurs à 5 $ ou 10 $.)
              </p>
              <p>
                Dans le temps qu'il faut pour utiliser Apple Pay, toucher ou glisser votre carte, cette notification au commerçant ne prend généralement que quelques secondes et vous permet d'acheter le produit que vous désirez. Pour l'utilisateur final, nous obtenons notre produit et la transaction semble réglée. Pour le commerçant, il faudra quelques jours pour que toutes les banques interagissent les unes avec les autres et pour que l'argent soit réellement réglé dans le compte du commerçant. Le délai est là en raison de chaque partie en cours de route ayant besoin d'effectuer des vérifications de fraude et de prendre leur part de l'argent.
              </p>
              <p>
                Comme on dit, Bitcoin résout cela. Lightning contourne le règlement retardé traditionnel et permet un règlement final où le commerçant peut s'assurer que le bitcoin réel est dans son compte avant de distribuer le produit acheté. Il ne peut y avoir de rétrofacturations ou de fraude.
              </p>
              <p>
                Voici comment fonctionne une transaction Bitcoin:
              </p>
              <p>
                Les frais d'aujourd'hui (fin septembre 2024) sont assez bas et une seule transaction avec un règlement final dans le prochain bloc (généralement environ 10 minutes) ne coûterait que 72 cents. C'est quel que soit le montant de la transaction. Acheter un café pour 4 $ coûterait 72 cents et envoyer 3 milliards de dollars coûterait 72 cents. 72 cents n'est pas beaucoup avec une transaction plus importante. C'est 18% du coût du café. Pour des achats plus petits ou quotidiens, même une transaction on-chain à faibles frais n'est pas idéale.
              </p>
              <p>
                À mesure que les frais augmentent, comme montré{' '}
                <a
                  href="https://bitinfocharts.com/comparison/bitcoin-transactionfees.html#3y"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  ici
                </a>
                , il pourrait coûter des dollars à un chiffre à des centaines de dollars bas pour régler sur la chaîne bitcoin principale. Régler on-chain est l'étalon-or car vous avez toute la sécurité soutenant l'ensemble du réseau Bitcoin.
              </p>
              <p>
                Cependant, acheter un café on-chain ne serait pas intelligent car 1) le commerçant doit attendre au moins 10 minutes pour assurer le règlement final et 2) les frais pourraient devenir plus chers que le coût du café.
              </p>
              <p>
                C'est là que Lightning entre en jeu. Même dans des environnements à frais élevés, le règlement final pour un café de 4 $ coûterait moins de 2 cents. Un autre avantage est le règlement final presque instantané. L'avantage pour vous et le commerçant est que ni l'un ni l'autre n'attend qu'une transaction se termine. Lightning a également le soutien de toute la sécurité de l'ensemble du réseau Bitcoin. Veuillez me contacter ci-dessous si vous voulez discuter des raisons techniques de cette sécurité malgré son coût beaucoup plus faible.
              </p>
            </div>
          </section>

          <section id="portefeuilles-lightning" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Quels portefeuilles Lightning recommandez-vous?</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Les plus faciles sont les solutions custodial, comme le portefeuille Lightning intégré dans{' '}
                <a
                  href="https://invite.strike.me/CSN0XF"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  Strike
                </a>
                {' '}(lien de parrainage pour obtenir 500 $ d'achats sans frais). Pour l'une des options auto-custodial les plus faciles à utiliser, je recommanderais de télécharger{' '}
                <a
                  href="https://breez.technology/mobile"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  Breez wallet
                </a>
                {' '}pour iPhone ou Android.
              </p>
              <p>
                Les vidéos de configuration pour Breez sont ici:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=5zhW7ilOjWg"
                    className="text-[#014932] underline hover:text-[#395144] transition-colors"
                  >
                    TFTC Guides: Lightning Network for Beginners with Breez Wallet
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=Z_yiPM2gzk0"
                    className="text-[#014932] underline hover:text-[#395144] transition-colors"
                  >
                    Breez Wallet: Flexibility & Sovereignty For The Bitcoin Lightning Network
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=t_4b-y4T8bY"
                    className="text-[#014932] underline hover:text-[#395144] transition-colors"
                  >
                    How To Use A Bitcoin Lightning Wallet: Breez
                  </a>
                </li>
              </ul>
              <p>
                Les utilisateurs plus techniques pourraient aimer{' '}
                <a
                  href="https://zeusln.com/"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  Zeus Lightning Wallet
                </a>
              </p>
              <p>
                Veuillez me contacter ci-dessous pour d'autres questions ou pour vous aider à configurer votre propre portefeuille.
              </p>
            </div>
          </section>

          <section id="bible-et-bitcoin" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Que dit la Bible sur Bitcoin?</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Bitcoin a été lancé en 2009. Il n'est évidemment pas directement discuté dans la Bible. Cependant, de nombreux attributs de Bitcoin sont discutés dans la Bible.
              </p>
              <p>
                Dans Genèse 1:27, nous apprenons que "<em>Dieu créa l'homme à son image, il le créa à l'image de Dieu</em>;" Nous avons "l'autorité divinement déléguée de créer des choses utiles avec nos mains."<sup>1</sup>. L'argent est un outil pour permettre collectivement à la communauté de produire plus de rendement que les individus ne peuvent le faire isolément<sup>2</sup>. L'argent comme outil essentiel pour l'épanouissement de la civilisation est un don de Dieu<sup>3</sup>.
              </p>
              <p>
                Qu'en est-il de Matthieu 6:24? "<em>Nul ne peut servir deux maîtres. Car, ou il haïra l'un, et aimera l'autre; ou il s'attachera à l'un, et méprisera l'autre. Vous ne pouvez servir Dieu et Mammon</em>."
              </p>
              <p>
                "Vraiment comprendre ce qu'est l'argent réduira le pouvoir que l'argent a sur nous."<sup>4</sup> L'argent ne doit pas régir nos vies, devenir une obsession ou être une source de douleur dans le monde<sup>5</sup>. "L'argent peut être reçu avec reconnaissance et considéré comme un bon don qui nous sert, pas l'inverse."<sup>6</sup>
              </p>
              <p>
                "L'argent moral et immoral a existé tout au long de l'histoire."<sup>7</sup> "Une fois que nous comprenons les changements négatifs à notre argent, nous pouvons éviter les incitations immorales inhérentes à l'argent non solide que nous avons aujourd'hui."<sup>8</sup>
              </p>
              <p>
                "<em>Ne vous y trompez pas: on ne se moque pas de Dieu. Ce qu'un homme aura semé, il le moissonnera aussi</em>." – Galates 6:7
              </p>
              <p>
                Dieu nous donne la volonté et la capacité de nous soutenir et de nous multiplier. L'investissement et ses rendements font partie du dessein de Dieu, faisant du travail une partie intégrante de l'être humain<sup>9</sup>.
              </p>
              <p>
                "L'argent fait partie intégrante de la vie parce que le travail fait partie intégrante de la vie."<sup>10</sup> Le travail crée quelque chose de valeur pour nous-mêmes et les autres<sup>11</sup>. Le travail est difficile<sup>12</sup>. Il ajoute de la valeur en créant de nouveaux biens et services qui améliorent la vie des gens<sup>13</sup>. "Le travail qui ajoute de la valeur devrait être récompensé."<sup>14</sup> Le vol détruit la valeur, volant quelque chose de valeur aux autres<sup>15</sup>.
              </p>
              <p>
                L'argent est un outil pour mesurer la valeur du travail<sup>16</sup>. Il permet la spécialisation au sein d'une société. Avant les formes non-commodité d'argent, nous nous heurtions au problème de la coïncidence des désirs. Un bon argent est celui qui n'est pas consommé lui-même mais plutôt décidé par la société d'être précieux. La valeur de votre travail se voit attribuer un certain nombre d'unités et ce nombre d'unités est déterminé par ce que la société valorise. Un système monétaire solide nous permet de "sacrifier notre temps aujourd'hui pour de l'argent qui peut être échangé contre quelque chose de valeur similaire à l'avenir".<sup>17</sup>
              </p>
              <p>
                Proverbes 16:11 dit "<em>La balance et les plateaux justes sont à l'Éternel; tous les poids du sac sont son œuvre</em>."
              </p>
              <p>
                Proverbes 11:1 dit "<em>La balance fausse est en horreur à l'Éternel, mais le poids juste lui est agréable</em>."
              </p>
              <p>
                Dieu désire que nous travaillions à son image et maintenions et développions son œuvre à travers le monde. La valeur de chacune des contributions devrait être récompensée dans une monnaie équitable appropriée à la valeur du travail effectué.
              </p>
              <p>
                Jésus a dit "<em>l'ouvrier mérite son salaire</em>." – Luc 10:7
              </p>
              <p>
                Lorsque nous sommes payés en monnaie fiduciaire, nous sommes payés dans une monnaie qui peut être perpétuellement dévaluée. Au fur et à mesure que notre argent est gonflé par l'impression de nouvelle monnaie, le pouvoir d'achat de chaque unité de monnaie diminue.
              </p>
              <p>
                Voici un graphique montrant comment le pouvoir d'achat du dollar américain a diminué depuis la création du système de la Réserve fédérale en 1913.
              </p>
              <p className="text-sm italic text-gray-600">
                [Graphique montrant la dépréciation du dollar américain depuis 1913]
              </p>
              <p>
                Le temps que nous avons sacrifié pour faire du travail et gagner de l'argent nous est volé. Dans Exode 20:15, Dieu a dit "<em>Tu ne déroberas point</em>." Ce commandement est universel. Tout comme les individus ne devraient pas voler un commerçant ou leur voisin, les banques centrales ne devraient pas voler le pouvoir d'achat des gens par l'inflation.
              </p>
              <p>
                À un "objectif" de 2% d'inflation, le pouvoir d'achat de notre argent est réduit de moitié en environ 35 ans. À l'inflation ciblée de 3%, nous perdons la moitié de notre pouvoir d'achat en un peu plus de 23 ans.
              </p>
              <p>
                Dieu désire que nous gagnions l'argent que nous méritons. L'inflation monétaire augmente l'offre de monnaie et la rend de moins en moins précieuse au fil du temps. De la même manière que les autorités romaines utilisaient des balances injustes, coupaient des portions de leurs pièces, ou diminuaient la quantité d'or ou d'argent pur dans les pièces, l'impression directe de monnaie par décret gouvernemental n'est effectivement pas différente.
              </p>
              <p>
                Un travailleur qui a sacrifié la majeure partie de sa vie à subvenir aux besoins de sa famille prendrait sa retraite et découvrirait que l'argent qu'il a économisé ne vaut plus le temps qu'il y a consacré. Ce n'est pas seulement de l'argent qui lui a été volé, mais littéralement du temps sur cette terre qu'il aurait pu passer avec sa famille, à faire quelque chose d'agréable ou de productif.
              </p>
              <p>
                Proverbes 22:22 dit "<em>Ne dépouille pas le pauvre, parce qu'il est pauvre, et n'opprime pas le malheureux à la porte</em>…"
              </p>
              <p>
                La monnaie fiduciaire fait justement cela…
              </p>
              <p>
                Comme il y a plus d'unités de monnaie disponibles, les prix des produits et des actifs augmentent pour correspondre. Les riches sont récompensés car ils possèdent des actifs qui s'apprécient avec l'inflation, comme l'or, l'immobilier et les actions. L'inflation croissante punit les pauvres car ils peuvent essayer d'économiser pendant des années et des années pour acheter ces actifs, mais leur coût peut être constamment hors de leur portée, en grande partie en raison de l'inflation des actifs des riches plaçant leur argent ici.
              </p>
              <p>
                "La forme d'argent que nous utilisons affecte tout ce que nous faisons."<sup>18</sup> "Le mauvais argent incite au comportement immoral."<sup>19</sup> Sous le standard Bitcoin, il y aurait moins d'incitation à la consommation car notre argent conserverait sa valeur et deviendrait plus précieux à l'avenir. Les produits pourraient être mieux conçus et construits pour durer plus longtemps afin qu'ils n'aient pas besoin d'être remplacés aussi souvent. Et les gouvernements seraient responsables envers leurs citoyens; les politiciens ne pourraient pas promettre "de l'argent gratuit" s'ils sont élus<sup>20</sup>; et il y aurait de vraies contraintes budgétaires<sup>21</sup>.
              </p>
              <p>
                Le mauvais argent encourage des comportements comme ce qui était décrit dans Proverbes 24:30-31:
              </p>
              <p>
                "<em>J'ai passé près du champ d'un paresseux, et près de la vigne d'un homme dépourvu de sens. Et voici, les épines y croissaient partout, les ronces en couvraient la face, et le mur de pierres était écroulé</em>."
              </p>
              <p>
                Bitcoin résout cela. Bitcoin encourage une préférence temporelle plus faible avec une planification vers un avenir plus abondant<sup>22</sup>. Il encourage les familles et nous aide à voir les enfants comme une bénédiction, pas comme un coût pour nous ou la société<sup>23</sup>.
              </p>
              <p>
                L'Église est composée de personnes. Une réforme économique de l'Église nécessite la réforme économique des congrégants<sup>24</sup>. Bitcoin peut aider l'Église à se remettre des effets corrupteurs de la monnaie fiduciaire et devenir plutôt une congrégation pleine de personnes libres de l'adoration de l'argent et uniquement dévouées à Dieu et au travail qu'Il désire pour nous<sup>25</sup>.
              </p>
              <p>
                "<em>Dieu les bénit, et Dieu leur dit: Soyez féconds, multipliez, remplissez la terre, et l'assujettissez; et dominez sur les poissons de la mer, sur les oiseaux du ciel, et sur tout animal qui se meut sur la terre</em>." – Genèse 1:28
              </p>
              <p>
                Bitcoin résout beaucoup des corruptions de notre système monétaire actuel, mais ce n'est pas une panacée<sup>26</sup>. Le bon argent est un don qui peut nous aider à être meilleurs mais nous devons combattre la tentation d'adorer le travail de nos propres mains<sup>27</sup>. Au lieu de cela, nous devons nous concentrer sur vivre des vies dans l'amour et le service aux autres<sup>28</sup>.
              </p>
              <p>
                "<em>Il fait toute chose bonne en son temps; même il a mis dans leur cœur la pensée de l'éternité, bien que l'homme ne puisse pas saisir l'œuvre que Dieu fait, du commencement jusqu'à la fin. J'ai reconnu qu'il n'y a de bonheur pour eux qu'à se réjouir et à se donner du bien-être pendant leur vie; mais que, si un homme mange et boit et jouit du bien-être au milieu de tout son travail, c'est là un don de Dieu</em>." – Ecclésiaste 3:11
              </p>
              <p>
                Dieu continue d'être à l'œuvre même aujourd'hui<sup>29</sup>. Bitcoin est une invitation à ralentir, à descendre du tapis roulant fiduciaire, et à devenir plus conscient de la bienveillance de Dieu et des bénédictions que nous recevons de Lui. La corruption de l'argent et l'incertitude économique qui en résulte est l'une des choses qui conduit à un style de vie pressé dans lequel beaucoup d'entre nous sommes perpétuellement<sup>30</sup>.
              </p>
              <p>
                L'argent et la discussion de l'argent n'ont pas à être chuchotés avec un mélange de peur, d'anxiété ou de cupidité<sup>31</sup>. L'argent est un don de Dieu et le bon argent, l'argent solide, devrait être une bénédiction pour nous et les autres autour de nous<sup>32</sup>.
              </p>
              <p>
                "L'argent est un moyen d'échanger, et l'échange est un moyen de créer des choses utiles pour la communauté."<sup>33</sup> "L'argent … est un ingrédient nécessaire pour l'expression la plus complète de qui Dieu nous a créés pour être."<sup>34</sup> "Le mauvais argent … nous attire vers l'adoration des choses créées plutôt que le Créateur. Le bon argent nous aide à accomplir notre but et nous rapproche de Dieu."<sup>35</sup>
              </p>
            </div>
          </section>

          <section id="dons-bitcoin-eglise" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Que se passe-t-il lorsque j'envoie du bitcoin à l'église?</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Le bitcoin qui est envoyé à (nom de l'église) est détenu en tant que bitcoin dans un portefeuille sécurisé contrôlé par plusieurs administrateurs de l'église. Pour les personnes techniquement inclinées, il est détenu en{' '}
                <a href="#stockage-froid" className="text-[#014932] underline hover:text-[#395144] transition-colors">
                  stockage à froid
                </a>
                {' '}et dans un arrangement multisig extra sécurisé.
              </p>
              <p>
                Selon les besoins pour financer ses divers programmes et soutenir ses missionnaires, (nom de l'église) dépensera le bitcoin pour répondre à ces besoins.
              </p>
              <p>
                Selon les circonstances, cela pourrait impliquer d'envoyer du bitcoin directement à ses missionnaires ou de convertir le bitcoin en dollars afin de payer des services plus conventionnels. Les détails exacts de ceci sont encore en discussion. Veuillez me contacter moi-même, (pasteur), ou les anciens pour une discussion plus approfondie.
              </p>
            </div>
          </section>

          <section id="dons-deductibles" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Les dons en bitcoin sont-ils déductibles d'impôt?</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Cette section nécessite une adaptation selon votre juridiction fiscale. Veuillez consulter un professionnel de la fiscalité dans votre pays pour obtenir des informations spécifiques sur le traitement fiscal des dons en cryptomonnaie.
              </p>
            </div>
          </section>

          <section id="en-savoir-plus" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Où puis-je en savoir plus?</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Vous pouvez me joindre à (ajouter les informations de contact)
              </p>
              <p>
                Excellente vidéo de 2 heures de niveau débutant:{' '}
                <a
                  href="https://www.youtube.com/watch?v=hW36zox-xR8"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  Jack Mallers on Tetragrammaton with Rick Rubin
                </a>
              </p>
              <p>
                <a
                  href="https://vijayboyapati.medium.com/the-bullish-case-for-bitcoin-6ecc8bdecc1"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  The Bullish Case for Bitcoin
                </a>
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=pCYeq6R5JcU"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  Jack Mallers on Why Bitcoin
                </a>
              </p>
              <p>
                Cours d'introduction gratuit appelé{' '}
                <a
                  href="https://welcome.swanbitcoin.com/"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  Welcome to Bitcoin
                </a>
                {' '}de Swan Bitcoin
              </p>
              <p>
                <a
                  href="https://whybitcoinonly.com/"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  Why Bitcoin Only
                </a>
              </p>
              <p>
                <a
                  href="https://endthefud.org/"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  End The FUD – The best articles debunking Bitcoin FUD
                </a>
              </p>
              <p>
                Site web{' '}
                <a
                  href="https://tgfb.com/"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  Thank God for Bitcoin
                </a>
                : La monnaie solide compte. Notre objectif est d'éduquer et d'équiper les chrétiens pour comprendre Bitcoin et l'utiliser pour la gloire de Dieu et le bien des gens partout.
              </p>
              <p>
                Deux excellentes vidéos avec l'équipe Thank God for Bitcoin:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <a
                    href="https://youtu.be/7_1lBlnz8r8"
                    className="text-[#014932] underline hover:text-[#395144] transition-colors"
                  >
                    Funding Ministry in an Expensive Time & Place
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=sMeqRfjxnYc"
                    className="text-[#014932] underline hover:text-[#395144] transition-colors"
                  >
                    How Bitcoin Transforms Funding for Global Missions with Ahshuwah Hawthorne
                  </a>
                </li>
              </ul>
              <p>
                Cours d'économie autrichienne de Saifedean: ECON103:{' '}
                <a
                  href="https://learn.saylor.org/course/view.php?id=480"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  Principles of Austrian Economics
                </a>
              </p>
              <p>
                <a
                  href="https://thebibleandbitcoin.com/should-christians-invest-in-bitcoin/"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  Should Christians Invest in Bitcoin?
                </a>
              </p>
              <p>
                Pamphlet{' '}
                <a
                  href="https://btcfixesthis.org/wp-content/uploads/2024/10/Christian-pamphlet.pdf"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  Love Your Neighbour Money
                </a>
                {' '}par le pasteur Alin Armstrong
              </p>
            </div>
          </section>

          <section id="livres-recommandes" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Avez-vous des livres à recommander?</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                <a
                  href="https://thebibleandbitcoin.com/"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  The Bible and Bitcoin
                </a>
              </p>
              <p>
                <a
                  href="https://www.amazon.com/Thank-God-Bitcoin-Corruption-Redemption/dp/1641991216"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  Thank God for Bitcoin: The Creation, Corruption and Redemption of Money
                </a>
              </p>
              <p>
                The Bitcoin Standard: The Decentralized Alternative to Central Banking (
                <a
                  href="https://saifedean.com/tbs"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  Saifedean Bookstore
                </a>
                /
                <a
                  href="https://www.amazon.com/Bitcoin-Standard-Decentralized-Alternative-Central/dp/1119473861"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  Amazon
                </a>
                )
              </p>
              <p>
                Broken Money: Why Our Financial System is Failing Us and How We Can Make it Better (
                <a
                  href="https://academy.saifedean.com/product/broken-money-hardcover/"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  Saifedean Bookstore
                </a>
                /
                <a
                  href="https://www.amazon.com/Broken-Money-Financial-System-Failing/dp/B0CG8985FR"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  Amazon
                </a>
                )
              </p>
              <p>
                <a
                  href="https://thepriceoftomorrow.com/"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  The Price of Tomorrow
                </a>
                : Why Deflation Is the Key to an Abundant Future
              </p>
            </div>
          </section>

          <section id="references" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Références</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Armstrong, Pastor Alin., <em>Love Your Neighbour Money</em>. Pamphlet PDF.{' '}
                <a
                  href="https://thebibleandbitcoin.com/should-christians-invest-in-bitcoin/"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  https://thebibleandbitcoin.com/should-christians-invest-in-bitcoin/
                </a>
                .
              </p>
              <p>
                Boyapati, Vijay. <em>The Bullish Case for Bitcoin</em>. 2018.{' '}
                <a
                  href="https://vijayboyapati.medium.com/the-bullish-case-for-bitcoin-6ecc8bdecc1"
                  className="text-[#014932] underline hover:text-[#395144] transition-colors"
                >
                  https://vijayboyapati.medium.com/the-bullish-case-for-bitcoin-6ecc8bdecc1
                </a>
                .
              </p>
              <p>
                Waltchack, D., Higgins, G., Mekhail, G., Song, J., Bush, J.M., Tourianski, J., Pratt, L., & Breedlove, R. <em>Thank God for Bitcoin The Creation, Corruption and Redemption of Money</em>. Bitcoin and Bible Group, 2020.
              </p>
            </div>
          </section>

          <section id="notes" className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-[#014932] mb-4">Notes de bas de page</h2>
            <div className="prose prose-lg text-gray-700 space-y-2 text-sm">
              <p><sup>1-35</sup> Toutes les références proviennent de: Waltchack, D. et al. <em>Thank God for Bitcoin The Creation, Corruption and Redemption of Money</em> (Bitcoin and Bible Group, 2020), pages variées.</p>
            </div>
          </section>
        </main>

        <footer className="mt-16 py-8 border-t border-[#395144] text-center text-[#395144]">
          <p>
            Dernière mise à jour disponible sur{' '}
            <a
              href="https://github.com/aoeu10/BTCFixesThis/releases"
              className="text-[#014932] underline hover:text-[#395144] transition-colors"
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}