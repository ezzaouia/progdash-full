const faker = require("faker");

module.exports = () => {
  const data = {
  "traces": [],
  "groups": [
    { "id": 82123, "name": "W2-W1", "nbUsers": 6 },
    { "id": 82124, "name": "C", "nbUsers": 26 },
    { "id": 82125, "name": "B", "nbUsers": 29 },
    { "id": 82126, "name": "A", "nbUsers": 28 },
    { "id": 84579, "name": "W", "nbUsers": 1 },
    { "id": 0, "name": "Tous", "nbUsers": 90 }
  ],
  "groupIds": [
    {
      "id": 911,
      "users": [
        {
          "id": 3805242,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 81, "count": 364 },
          "initialLevel": { "sum": 33, "count": 81 },
          "initialEval": 24,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 4218944,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 70, "count": 364 },
          "initialLevel": { "sum": 49, "count": 70 },
          "initialEval": 35,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805243,
          "fullName": faker.name.findName(),
          "time": 166,
          "score": { "sum": 127, "count": 364 },
          "initialLevel": { "sum": 77, "count": 127 },
          "initialEval": 55,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 15,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4595,
                "name":
                  "« elle s'est fait faire » ou « elle s'est faite faire » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4623,
                "name": "« quoique » ou « quoi que » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4649,
                "name": "« acompte » ou « accompte » ?",
                "difficultyLevel": 9
              },
              {
                "id": 4587,
                "name": "« huit heure » ou « huit heures » ?",
                "difficultyLevel": 1
              }
            ],
            "acquired": [
              {
                "id": 4642,
                "name": "« des tuniques bleu foncé » ou « bleues foncées » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4601,
                "name":
                  "« magazin » ou « magasin » ? « magasine » ou « magazine » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4625,
                "name":
                  "« ils sont debouts » ou « ils sont debout » ? « ils sont ensembles » ou « ils sont ensemble » ?",
                "difficultyLevel": 16
              }
            ],
            "known": [
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 36
              },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4729,
                "name": "« du » ou « dû » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 19
              },
              {
                "id": 3218,
                "name":
                  "« personel » ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 17
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-19",
              "sumscore": 37.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-20",
              "sumscore": 48.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-21",
              "sumscore": 72.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-04",
              "sumscore": 85.76,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-11",
              "sumscore": 98.64,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 119.64,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 4218945,
          "fullName": faker.name.findName(),
          "time": 13,
          "score": { "sum": 83, "count": 364 },
          "initialLevel": { "sum": 56, "count": 83 },
          "initialEval": 40,
          "lastConnection": "2019-04-04",
          "connectionsNbr": 1,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4545,
                "name": "« connection » ou « connexion » ?",
                "difficultyLevel": 7
              }
            ],
            "acquired": [
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4552,
                "name": "« je peux » ou « je peut » ? ",
                "difficultyLevel": 3
              }
            ],
            "known": [
              {
                "id": 4535,
                "name": "« avenir » ou « à venir » ?",
                "difficultyLevel": 6
              },
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4539,
                "name": "« ça », « çà » ou « sa » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4540,
                "name": "« dans » ou « d'en » ?",
                "difficultyLevel": 3
              }
            ]
          },
          "progData": [
            {
              "date": "2019-04-04",
              "sumscore": 13.88,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805240,
          "fullName": faker.name.findName(),
          "time": 341,
          "score": { "sum": 191, "count": 364 },
          "initialLevel": { "sum": 78, "count": 191 },
          "initialEval": 45,
          "lastConnection": "2019-01-05",
          "connectionsNbr": 31,
          "lastModule": "Excellence",
          "topNRules": {
            "focused": [
              {
                "id": 7978,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 32
              },
              {
                "id": 7972,
                "name": "Majuscule ou minuscule après le deux-points",
                "difficultyLevel": 17
              },
              {
                "id": 7976,
                "name":
                  "Guillemets : point avant ou après le guillemet fermant",
                "difficultyLevel": 17
              },
              {
                "id": 7990,
                "name": "Guillemets : français, anglais, droits",
                "difficultyLevel": 17
              },
              {
                "id": 8832,
                "name": "« agonir » ou « agoniser » ?",
                "difficultyLevel": 15
              }
            ],
            "acquired": [
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 68
              },
              {
                "id": 4653,
                "name": "« bimensuel » ou « bimestriel » ?",
                "difficultyLevel": 46
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 34
              },
              {
                "id": 4572,
                "name": "« la plupart est » ou « la plupart sont » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4663,
                "name": "« tout énervée » ou « toute énervée » ?",
                "difficultyLevel": 30
              }
            ],
            "known": [
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 39
              },
              {
                "id": 4640,
                "name": "« parti » ou « partie » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4583,
                "name": "«  tu tries » ou « tu tris » ? ",
                "difficultyLevel": 25
              },
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 25
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-22",
              "sumscore": 18.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-28",
              "sumscore": 33.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-18",
              "sumscore": 48.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-21",
              "sumscore": 53.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-27",
              "sumscore": 61.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-28",
              "sumscore": 64.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-06",
              "sumscore": 78.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-12",
              "sumscore": 83.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-23",
              "sumscore": 89.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-24",
              "sumscore": 105.52,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-26",
              "sumscore": 116.439995,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2018-12-27",
              "sumscore": 151.08,
              "moduleName": "Excellence"
            },
            {
              "date": "2018-12-28",
              "sumscore": 181.08,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-05",
              "sumscore": 191.08,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805241,
          "fullName": faker.name.findName(),
          "time": 2,
          "score": { "sum": 111, "count": 364 },
          "initialLevel": { "sum": 66, "count": 111 },
          "initialEval": 47,
          "lastConnection": "2019-03-03",
          "connectionsNbr": 2,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4540,
                "name": "« dans » ou « d'en » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4542,
                "name": "« j'envoie » ou « j'envois » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4550,
                "name":
                  "« tu mange » ou « tu manges » ? « tu mangera » ou « tu mangeras » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 1
              }
            ],
            "known": [
              {
                "id": 4535,
                "name": "« avenir » ou « à venir » ?",
                "difficultyLevel": 2
              },
              {
                "id": 4566,
                "name": "« en fesant » ou « en faisant » ? ",
                "difficultyLevel": 2
              },
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4539,
                "name": "« ça », « çà » ou « sa » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4545,
                "name": "« connection » ou « connexion » ?",
                "difficultyLevel": 1
              }
            ]
          },
          "progData": [
            {
              "date": "2019-03-03",
              "sumscore": 14.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805246,
          "fullName": faker.name.findName(),
          "time": 487,
          "score": { "sum": 177, "count": 364 },
          "initialLevel": { "sum": 85, "count": 177 },
          "initialEval": 50,
          "lastConnection": "2019-04-02",
          "connectionsNbr": 34,
          "lastModule": "Excellence",
          "topNRules": {
            "focused": [
              {
                "id": 7976,
                "name":
                  "Guillemets : point avant ou après le guillemet fermant",
                "difficultyLevel": 49
              },
              {
                "id": 7986,
                "name": "Ponctuation et espaces",
                "difficultyLevel": 48
              },
              {
                "id": 7993,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 29
              },
              {
                "id": 8818,
                "name": "« fatigant » ou « fatiguant » ?",
                "difficultyLevel": 27
              },
              {
                "id": 7972,
                "name": "Majuscule ou minuscule après le deux-points",
                "difficultyLevel": 26
              }
            ],
            "acquired": [
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 51
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 49
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4653,
                "name": "« bimensuel » ou « bimestriel » ?",
                "difficultyLevel": 33
              }
            ],
            "known": [
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 44
              },
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 40
              },
              {
                "id": 4569,
                "name": "« tous les » ou « tout les » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4572,
                "name": "« la plupart est » ou « la plupart sont » ?",
                "difficultyLevel": 16
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-18",
              "sumscore": 8.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-05",
              "sumscore": 15.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-12",
              "sumscore": 24.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-18",
              "sumscore": 33.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-29",
              "sumscore": 56.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-06",
              "sumscore": 62.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-08",
              "sumscore": 74.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-24",
              "sumscore": 75.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-25",
              "sumscore": 83.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-27",
              "sumscore": 85.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-06",
              "sumscore": 96.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-19",
              "sumscore": 128.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-22",
              "sumscore": 134.88,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-23",
              "sumscore": 139.52,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-31",
              "sumscore": 145.22,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-04-01",
              "sumscore": 162.74,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-02",
              "sumscore": 177.42,
              "moduleName": "Excellence"
            }
          ]
        },
        {
          "id": 3805247,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 73, "count": 364 },
          "initialLevel": { "sum": 36, "count": 73 },
          "initialEval": 26,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805244,
          "fullName": faker.name.findName(),
          "time": 782,
          "score": { "sum": 139, "count": 364 },
          "initialLevel": { "sum": 79, "count": 139 },
          "initialEval": 56,
          "lastConnection": "2019-03-30",
          "connectionsNbr": 24,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 65
              },
              {
                "id": 3218,
                "name":
                  "« personel » ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 45
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 41
              },
              {
                "id": 4665,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 40
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 36
              }
            ],
            "acquired": [
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 45
              },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 39
              },
              {
                "id": 4729,
                "name": "« du » ou « dû » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4664,
                "name": "« je vous saurais gré » ou « je vous serais gré » ?",
                "difficultyLevel": 36
              },
              {
                "id": 4613,
                "name": "« ci-joint » ou « ci-jointe » ?",
                "difficultyLevel": 33
              }
            ],
            "known": [
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 55
              },
              {
                "id": 4663,
                "name": "« tout énervée » ou « toute énervée » ?",
                "difficultyLevel": 55
              },
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4586,
                "name": "« voie » ou « voix » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 31
              }
            ]
          },
          "progData": [
            {
              "date": "2018-12-01",
              "sumscore": 11.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-08",
              "sumscore": 19.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-09",
              "sumscore": 29.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-15",
              "sumscore": 97.52,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-16",
              "sumscore": 107.52,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-26",
              "sumscore": 108.52,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-30",
              "sumscore": 139.09999,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805245,
          "fullName": faker.name.findName(),
          "time": 420,
          "score": { "sum": 163, "count": 364 },
          "initialLevel": { "sum": 63, "count": 163 },
          "initialEval": 39,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 30,
          "lastModule": "Orthotypographie",
          "topNRules": {
            "focused": [
              {
                "id": 7978,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 57
              },
              {
                "id": 7993,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 44
              },
              {
                "id": 7987,
                "name": "La révolution de 1789 ou la Révolution",
                "difficultyLevel": 34
              },
              {
                "id": 7976,
                "name":
                  "Guillemets : point avant ou après le guillemet fermant",
                "difficultyLevel": 32
              },
              {
                "id": 7984,
                "name":
                  "L'usage ou non de la virgule autour des propositions relatives",
                "difficultyLevel": 23
              }
            ],
            "acquired": [
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 52
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 45
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 40
              },
              {
                "id": 4659,
                "name": "« lorsque » ou « lorsqu' »",
                "difficultyLevel": 40
              },
              {
                "id": 4661,
                "name": "du bon usage de « s'avérer »",
                "difficultyLevel": 40
              }
            ],
            "known": [
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 61
              },
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4612,
                "name":
                  "« ce faisant » ou « se faisant » ? « pour ce faire » ou « pour se faire » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4601,
                "name":
                  "« magazin » ou « magasin » ? « magasine » ou « magazine » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4622,
                "name":
                  "« exigeant » ou « exigent » ? « exigeance » ou « exigence » ?",
                "difficultyLevel": 15
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-23",
              "sumscore": 10.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-19",
              "sumscore": 52.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-20",
              "sumscore": 60.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-21",
              "sumscore": 88.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-27",
              "sumscore": 110.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-16",
              "sumscore": 125.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-17",
              "sumscore": 140.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-07",
              "sumscore": 148.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-04-01",
              "sumscore": 163.34,
              "moduleName": "Orthotypographie"
            }
          ]
        },
        {
          "id": 3805234,
          "fullName": faker.name.findName(),
          "time": 498,
          "score": { "sum": 178, "count": 364 },
          "initialLevel": { "sum": 41, "count": 178 },
          "initialEval": 21,
          "lastConnection": "2019-04-06",
          "connectionsNbr": 53,
          "lastModule": "Excellence",
          "topNRules": {
            "focused": [
              {
                "id": 8823,
                "name": "« il vaut mieux » ou « il faut mieux » ?",
                "difficultyLevel": 22
              },
              {
                "id": 8817,
                "name": "« convaincant » ou « convainquant » ?",
                "difficultyLevel": 14
              },
              {
                "id": 8822,
                "name": "« cote » ou « côte » ?",
                "difficultyLevel": 12
              },
              { "id": 8820, "name": "« répercussion »", "difficultyLevel": 10 },
              {
                "id": 8814,
                "name": "« enclin », « encline »",
                "difficultyLevel": 8
              }
            ],
            "acquired": [
              {
                "id": 7978,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 86
              },
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 65
              },
              {
                "id": 7993,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 54
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 45
              },
              {
                "id": 4738,
                "name": "« cent » ou « cents » ?",
                "difficultyLevel": 43
              }
            ],
            "known": [
              { "id": 4589, "name": "« c » ou « ç » ?", "difficultyLevel": 24 },
              {
                "id": 4547,
                "name": "« on » ou « ont » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4654,
                "name": "« à l'instar de » ",
                "difficultyLevel": 14
              },
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 13
              }
            ]
          },
          "progData": [
            { "date": "2018-10-29", "sumscore": 14.0, "moduleName": "Pro" },
            { "date": "2018-11-16", "sumscore": 25.0, "moduleName": "Pro" },
            { "date": "2018-11-18", "sumscore": 33.0, "moduleName": "Pro" },
            { "date": "2018-11-19", "sumscore": 42.0, "moduleName": "Pro" },
            { "date": "2018-11-27", "sumscore": 54.0, "moduleName": "Pro" },
            { "date": "2018-11-29", "sumscore": 58.0, "moduleName": "Pro" },
            { "date": "2018-12-06", "sumscore": 67.0, "moduleName": "Pro" },
            { "date": "2018-12-26", "sumscore": 76.0, "moduleName": "Pro" },
            {
              "date": "2018-12-27",
              "sumscore": 94.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2018-12-28",
              "sumscore": 110.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-01-05",
              "sumscore": 120.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-01-08",
              "sumscore": 121.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-01-24",
              "sumscore": 125.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-02-02",
              "sumscore": 140.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-02-21",
              "sumscore": 147.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-03-10",
              "sumscore": 151.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-03-31",
              "sumscore": 154.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-04-06",
              "sumscore": 178.68,
              "moduleName": "Excellence"
            }
          ]
        },
        {
          "id": 3805235,
          "fullName": faker.name.findName(),
          "time": 196,
          "score": { "sum": 100, "count": 364 },
          "initialLevel": { "sum": 61, "count": 100 },
          "initialEval": 44,
          "lastConnection": "2019-04-05",
          "connectionsNbr": 15,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 100
              },
              {
                "id": 4625,
                "name":
                  "« ils sont debouts » ou « ils sont debout » ? « ils sont ensembles » ou « ils sont ensemble » ?",
                "difficultyLevel": 39
              },
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 35
              },
              {
                "id": 4590,
                "name":
                  "« Est-ce que le repas est-il prêt ? » ou « Est-ce que le repas est prêt » ? ",
                "difficultyLevel": 30
              }
            ],
            "acquired": [
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 47
              },
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 42
              },
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 36
              },
              {
                "id": 4562,
                "name": "« ces » ou « ses » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4592,
                "name": "« si il » ou « s'il » ?",
                "difficultyLevel": 25
              }
            ],
            "known": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 74
              },
              { "id": 4589, "name": "« c » ou « ç » ?", "difficultyLevel": 42 },
              {
                "id": 4541,
                "name": "« vous parler » ou « vous parlez » ?",
                "difficultyLevel": 37
              },
              {
                "id": 4550,
                "name":
                  "« tu mange » ou « tu manges » ? « tu mangera » ou « tu mangeras » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 29
              }
            ]
          },
          "progData": [
            {
              "date": "2019-01-05",
              "sumscore": 23.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-02",
              "sumscore": 27.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-03",
              "sumscore": 53.92,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-04",
              "sumscore": 73.799995,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-05",
              "sumscore": 85.799995,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805232,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 42, "count": 364 },
          "initialLevel": { "sum": 42, "count": 42 },
          "initialEval": 30,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805233,
          "fullName": faker.name.findName(),
          "time": 17,
          "score": { "sum": 102, "count": 364 },
          "initialLevel": { "sum": 51, "count": 102 },
          "initialEval": 36,
          "lastConnection": "2019-03-22",
          "connectionsNbr": 2,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 4
              }
            ],
            "acquired": [
              {
                "id": 4545,
                "name": "« connection » ou « connexion » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 4
              },
              {
                "id": 4559,
                "name": "« cauchemar » ou « cauchemard » ?",
                "difficultyLevel": 4
              },
              {
                "id": 4534,
                "name": "« son » ou « sont » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4535,
                "name": "« avenir » ou « à venir » ?",
                "difficultyLevel": 3
              }
            ],
            "known": [
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4565,
                "name": "« mieu » ou « mieux » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4542,
                "name": "« j'envoie » ou « j'envois » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4539,
                "name": "« ça », « çà » ou « sa » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4547,
                "name": "« on » ou « ont » ?",
                "difficultyLevel": 3
              }
            ]
          },
          "progData": [
            {
              "date": "2019-03-22",
              "sumscore": 27.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805238,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 64, "count": 364 },
          "initialLevel": { "sum": 27, "count": 64 },
          "initialEval": 19,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805239,
          "fullName": faker.name.findName(),
          "time": 430,
          "score": { "sum": 144, "count": 364 },
          "initialLevel": { "sum": 53, "count": 144 },
          "initialEval": 35,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 27,
          "lastModule": "Orthotypographie",
          "topNRules": {
            "focused": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 23
              },
              {
                "id": 4662,
                "name": "« j'ai été » ou « je suis allé » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4665,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4659,
                "name": "« lorsque » ou « lorsqu' »",
                "difficultyLevel": 10
              }
            ],
            "acquired": [
              {
                "id": 4624,
                "name":
                  "« on a, on en, on y » ou « on n'a, on n'en, on n'y » ?",
                "difficultyLevel": 47
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 24
              },
              {
                "id": 4640,
                "name": "« parti » ou « partie » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4553,
                "name": "« il travail » ou « il travaille » ?",
                "difficultyLevel": 20
              }
            ],
            "known": [
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 28
              },
              {
                "id": 4541,
                "name": "« vous parler » ou « vous parlez » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4550,
                "name":
                  "« tu mange » ou « tu manges » ? « tu mangera » ou « tu mangeras » ?",
                "difficultyLevel": 15
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-17",
              "sumscore": 18.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-19",
              "sumscore": 27.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-25",
              "sumscore": 32.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-29",
              "sumscore": 56.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-26",
              "sumscore": 66.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-27",
              "sumscore": 68.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-28",
              "sumscore": 81.88,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-03",
              "sumscore": 91.88,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-04",
              "sumscore": 111.82,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-05",
              "sumscore": 139.1,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-17",
              "sumscore": 144.86,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-04-01",
              "sumscore": 144.86,
              "moduleName": "Orthotypographie"
            }
          ]
        },
        {
          "id": 3805236,
          "fullName": faker.name.findName(),
          "time": 111,
          "score": { "sum": 112, "count": 364 },
          "initialLevel": { "sum": 53, "count": 112 },
          "initialEval": 38,
          "lastConnection": "2019-03-31",
          "connectionsNbr": 9,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4541,
                "name": "« vous parler » ou « vous parlez » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4595,
                "name":
                  "« elle s'est fait faire » ou « elle s'est faite faire » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 8
              }
            ],
            "acquired": [
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4598,
                "name": "« peut être » ou « peut-être » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4565,
                "name": "« mieu » ou « mieux » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4577,
                "name": "« un envoie » ou « un envoi » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 12
              }
            ],
            "known": [
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4735,
                "name":
                  "« dévelopement », « dévellopement », ou « développement » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 13
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-22",
              "sumscore": 18.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-26",
              "sumscore": 32.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-06",
              "sumscore": 43.88,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-31",
              "sumscore": 69.64,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805237,
          "fullName": faker.name.findName(),
          "time": 32,
          "score": { "sum": 115, "count": 364 },
          "initialLevel": { "sum": 69, "count": 115 },
          "initialEval": 49,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 6,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 9
              },
              {
                "id": 4583,
                "name": "«  tu tries » ou « tu tris » ? ",
                "difficultyLevel": 6
              },
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 6
              },
              {
                "id": 4577,
                "name": "« un envoie » ou « un envoi » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4582,
                "name": "« c'est » ou « s'est » ? « ce sont » ou « se sont » ?",
                "difficultyLevel": 5
              }
            ],
            "known": [
              {
                "id": 4562,
                "name": "« ces » ou « ses » ?",
                "difficultyLevel": 11
              },
              { "id": 4554, "name": "accent ou pas ?", "difficultyLevel": 7 },
              {
                "id": 4573,
                "name": "« ni » ou « n'y » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4588,
                "name": "« il se détend » ou « il se détent » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4600,
                "name": "« entretien » ou « entretient » ?",
                "difficultyLevel": 7
              }
            ]
          },
          "progData": [
            {
              "date": "2019-04-01",
              "sumscore": 56.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805226,
          "fullName": faker.name.findName(),
          "time": 221,
          "score": { "sum": 129, "count": 364 },
          "initialLevel": { "sum": 89, "count": 129 },
          "initialEval": 64,
          "lastConnection": "2019-01-06",
          "connectionsNbr": 11,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4729,
                "name": "« du » ou « dû » ?",
                "difficultyLevel": 6
              },
              {
                "id": 4615,
                "name": "« va » ou « vas » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4613,
                "name": "« ci-joint » ou « ci-jointe » ?",
                "difficultyLevel": 4
              }
            ],
            "acquired": [
              {
                "id": 4641,
                "name": "« des nuages blanc » ou « des nuages blancs » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4735,
                "name":
                  "« dévelopement », « dévellopement », ou « développement » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4609,
                "name": "« voir » ou « voire » ?",
                "difficultyLevel": 15
              }
            ],
            "known": [
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 45
              },
              {
                "id": 4562,
                "name": "« ces » ou « ses » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4600,
                "name": "« entretien » ou « entretient » ?",
                "difficultyLevel": 17
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-29",
              "sumscore": 23.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-30",
              "sumscore": 28.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-06",
              "sumscore": 123.52,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805227,
          "fullName": faker.name.findName(),
          "time": 430,
          "score": { "sum": 122, "count": 364 },
          "initialLevel": { "sum": 51, "count": 122 },
          "initialEval": 36,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 13,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4604,
                "name": "« -euil » ou « -ueil » ?",
                "difficultyLevel": 42
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4639,
                "name": "« différend » ou « différent » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4641,
                "name": "« des nuages blanc » ou « des nuages blancs » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4602,
                "name": "« vous dites » ou « vous dîtes » ?",
                "difficultyLevel": 1
              }
            ],
            "acquired": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 24
              },
              {
                "id": 4583,
                "name": "«  tu tries » ou « tu tris » ? ",
                "difficultyLevel": 24
              },
              {
                "id": 4592,
                "name": "« si il » ou « s'il » ?",
                "difficultyLevel": 22
              },
              {
                "id": 3218,
                "name":
                  "« personel » ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4548,
                "name": "« je le savais » ou « je le savait » ?",
                "difficultyLevel": 19
              }
            ],
            "known": [
              {
                "id": 4586,
                "name": "« voie » ou « voix » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 26
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 16
              }
            ]
          },
          "progData": [
            {
              "date": "2019-01-03",
              "sumscore": 30.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-05",
              "sumscore": 70.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-06",
              "sumscore": 83.88,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 106.759995,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805224,
          "fullName": faker.name.findName(),
          "time": 135,
          "score": { "sum": 100, "count": 364 },
          "initialLevel": { "sum": 29, "count": 100 },
          "initialEval": 21,
          "lastConnection": "2019-04-02",
          "connectionsNbr": 13,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4564,
                "name": "« quand » ou « qu'en » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4577,
                "name": "« un envoie » ou « un envoi » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4582,
                "name": "« c'est » ou « s'est » ? « ce sont » ou « se sont » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4540,
                "name": "« dans » ou « d'en » ?",
                "difficultyLevel": 10
              }
            ],
            "acquired": [
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 39
              },
              {
                "id": 4553,
                "name": "« il travail » ou « il travaille » ?",
                "difficultyLevel": 29
              },
              {
                "id": 4571,
                "name": "« plus tôt » ou « plutôt » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4549,
                "name": "« nous nous amusont » ou « nous nous amusons » ?",
                "difficultyLevel": 18
              }
            ],
            "known": [
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 46
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 32
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4547,
                "name": "« on » ou « ont » ?",
                "difficultyLevel": 15
              }
            ]
          },
          "progData": [
            { "date": "2018-10-22", "sumscore": 1.0, "moduleName": "Pro" },
            { "date": "2018-10-27", "sumscore": 4.0, "moduleName": "Pro" },
            { "date": "2018-10-28", "sumscore": 6.0, "moduleName": "Pro" },
            { "date": "2018-10-29", "sumscore": 8.0, "moduleName": "Pro" },
            { "date": "2018-11-09", "sumscore": 27.76, "moduleName": "Pro" },
            {
              "date": "2018-11-21",
              "sumscore": 34.760002,
              "moduleName": "Pro"
            },
            { "date": "2019-04-02", "sumscore": 40.640003, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805225,
          "fullName": faker.name.findName(),
          "time": 303,
          "score": { "sum": 103, "count": 364 },
          "initialLevel": { "sum": 26, "count": 103 },
          "initialEval": 19,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 24,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 75
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 69
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 34
              },
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 31
              },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 25
              }
            ],
            "acquired": [
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 53
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4600,
                "name": "« entretien » ou « entretient » ?",
                "difficultyLevel": 30
              },
              {
                "id": 4573,
                "name": "« ni » ou « n'y » ?",
                "difficultyLevel": 29
              }
            ],
            "known": [
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 39
              },
              {
                "id": 4548,
                "name": "« je le savais » ou « je le savait » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4564,
                "name": "« quand » ou « qu'en » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4538,
                "name": "« ou » ou « où » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 12
              }
            ]
          },
          "progData": [
            { "date": "2018-11-16", "sumscore": 3.0, "moduleName": "Pro" },
            { "date": "2018-11-25", "sumscore": 8.0, "moduleName": "Pro" },
            { "date": "2019-01-03", "sumscore": 16.0, "moduleName": "Pro" },
            { "date": "2019-01-05", "sumscore": 41.82, "moduleName": "Pro" },
            {
              "date": "2019-01-06",
              "sumscore": 55.579998,
              "moduleName": "Pro"
            },
            { "date": "2019-04-01", "sumscore": 68.979996, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805230,
          "fullName": faker.name.findName(),
          "time": 88,
          "score": { "sum": 104, "count": 364 },
          "initialLevel": { "sum": 41, "count": 104 },
          "initialEval": 29,
          "lastConnection": "2019-02-05",
          "connectionsNbr": 13,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              {
                "id": 4590,
                "name":
                  "« Est-ce que le repas est-il prêt ? » ou « Est-ce que le repas est prêt » ?",
                "difficultyLevel": 9
              },
              {
                "id": 4619,
                "name": "« parmi » ou « parmis » ?",
                "difficultyLevel": 8
              }
            ],
            "acquired": [
              {
                "id": 4582,
                "name": "« c'est » ou « s'est » ? « ce sont » ou « se sont » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 14
              }
            ],
            "known": [
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 28
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4547,
                "name": "« on » ou « ont » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4540,
                "name": "« dans » ou « d'en » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4571,
                "name": "« plus tôt » ou « plutôt » ?",
                "difficultyLevel": 11
              }
            ]
          },
          "progData": [
            { "date": "2018-10-20", "sumscore": 6.0, "moduleName": "Pro" },
            { "date": "2018-10-21", "sumscore": 10.0, "moduleName": "Pro" },
            { "date": "2018-10-22", "sumscore": 13.0, "moduleName": "Pro" },
            { "date": "2019-01-06", "sumscore": 27.0, "moduleName": "Pro" },
            { "date": "2019-01-19", "sumscore": 43.88, "moduleName": "Pro" },
            { "date": "2019-02-05", "sumscore": 55.760002, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805231,
          "fullName": faker.name.findName(),
          "time": 1024,
          "score": { "sum": 310, "count": 364 },
          "initialLevel": { "sum": 126, "count": 310 },
          "initialEval": 44,
          "lastConnection": "2019-01-15",
          "connectionsNbr": 48,
          "lastModule": "Excellence",
          "topNRules": {
            "focused": [
              {
                "id": 8921,
                "name": "« quelque… que » ou « quelques… que » ?",
                "difficultyLevel": 47
              },
              {
                "id": 7978,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 35
              },
              {
                "id": 8952,
                "name": "accord après « le peu de »",
                "difficultyLevel": 35
              },
              {
                "id": 8908,
                "name": "« feu » ou « feue » ?",
                "difficultyLevel": 32
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 30
              }
            ],
            "acquired": [
              {
                "id": 8900,
                "name": "« gril » ou « grill » ?",
                "difficultyLevel": 44
              },
              {
                "id": 8918,
                "name":
                  "« parler pour ne rien dire » mais « causer littérature »",
                "difficultyLevel": 33
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 30
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 27
              }
            ],
            "known": [
              {
                "id": 4641,
                "name": "« des nuages blanc » ou « des nuages blancs » ?",
                "difficultyLevel": 36
              },
              {
                "id": 4624,
                "name":
                  "« on a, on en, on y » ou « on n'a, on n'en, on n'y » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 24
              },
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4547,
                "name": "« on » ou « ont » ?",
                "difficultyLevel": 17
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-15",
              "sumscore": 25.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-16",
              "sumscore": 45.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-17",
              "sumscore": 49.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-18",
              "sumscore": 74.76,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-19",
              "sumscore": 104.4,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-20",
              "sumscore": 131.4,
              "moduleName": "Excellence"
            },
            {
              "date": "2018-10-21",
              "sumscore": 172.56,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-22",
              "sumscore": 193.2,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2018-10-23",
              "sumscore": 210.2,
              "moduleName": "Excellence"
            },
            {
              "date": "2018-10-31",
              "sumscore": 258.24,
              "moduleName": "Excellence"
            },
            {
              "date": "2018-11-01",
              "sumscore": 288.4,
              "moduleName": "Excellence"
            },
            {
              "date": "2018-11-09",
              "sumscore": 302.96,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-01-15",
              "sumscore": 310.36,
              "moduleName": "Excellence"
            }
          ]
        },
        {
          "id": 3805228,
          "fullName": faker.name.findName(),
          "time": 216,
          "score": { "sum": 118, "count": 364 },
          "initialLevel": { "sum": 56, "count": 118 },
          "initialEval": 40,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 10,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 9
              },
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 8
              }
            ],
            "acquired": [
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 78
              },
              {
                "id": 4557,
                "name": "« notre » ou « nôtre » ? « votre » ou « vôtre » ?",
                "difficultyLevel": 40
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 26
              },
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 19
              }
            ],
            "known": [
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 34
              },
              {
                "id": 4610,
                "name": "« presque » ou « presqu' » ?",
                "difficultyLevel": 19
              },
              {
                "id": 3218,
                "name":
                  "« personel » ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 18
              },
              { "id": 4554, "name": "accent ou pas ?", "difficultyLevel": 17 },
              {
                "id": 4555,
                "name": "« si » ou « s'y » ?",
                "difficultyLevel": 15
              }
            ]
          },
          "progData": [
            {
              "date": "2019-01-05",
              "sumscore": 33.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-07",
              "sumscore": 47.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-10",
              "sumscore": 70.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 97.76,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805229,
          "fullName": faker.name.findName(),
          "time": 213,
          "score": { "sum": 138, "count": 364 },
          "initialLevel": { "sum": 59, "count": 138 },
          "initialEval": 42,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 11,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4662,
                "name": "« j'ai été » ou « je suis allé » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4639,
                "name": "« différend » ou « différent » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4663,
                "name": "« tout énervée » ou « toute énervée » ?",
                "difficultyLevel": 9
              }
            ],
            "acquired": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 27
              },
              {
                "id": 4665,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4647,
                "name": "« fabricant » ou « fabriquant » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4657,
                "name": "« à l'attention de » ou « à l'intention de » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 14
              }
            ],
            "known": [
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4727,
                "name":
                  "« lui même » ou « lui-même » ? « eux-même » ou « eux-mêmes » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4572,
                "name": "« la plupart est » ou « la plupart sont » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4582,
                "name": "« c'est » ou « s'est » ? « ce sont » ou « se sont » ?",
                "difficultyLevel": 11
              }
            ]
          },
          "progData": [
            {
              "date": "2019-01-05",
              "sumscore": 45.52,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-06",
              "sumscore": 115.04,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-07",
              "sumscore": 128.68001,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 138.68001,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805218,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 64, "count": 364 },
          "initialLevel": { "sum": 23, "count": 64 },
          "initialEval": 16,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805219,
          "fullName": faker.name.findName(),
          "time": 48,
          "score": { "sum": 90, "count": 364 },
          "initialLevel": { "sum": 36, "count": 90 },
          "initialEval": 26,
          "lastConnection": "2019-01-06",
          "connectionsNbr": 5,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              { "id": 4538, "name": "« ou » ou « où » ?", "difficultyLevel": 5 }
            ],
            "acquired": [
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4549,
                "name": "« nous nous amusont » ou « nous nous amusons » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4573,
                "name": "« ni » ou « n'y » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4734,
                "name": "« un employé » ou « un employer » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4534,
                "name": "« son » ou « sont » ?",
                "difficultyLevel": 3
              }
            ],
            "known": [
              {
                "id": 4565,
                "name": "« mieu » ou « mieux » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 4
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 3
              }
            ]
          },
          "progData": [
            { "date": "2019-01-02", "sumscore": 14.0, "moduleName": "Pro" },
            { "date": "2019-01-06", "sumscore": 27.0, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805217,
          "fullName": faker.name.findName(),
          "time": 163,
          "score": { "sum": 140, "count": 364 },
          "initialLevel": { "sum": 84, "count": 140 },
          "initialEval": 60,
          "lastConnection": "2018-10-23",
          "connectionsNbr": 18,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4657,
                "name": "« à l'attention de » ou « à l'intention de » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 24
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4663,
                "name": "« tout énervée » ou « toute énervée » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 21
              }
            ],
            "known": [
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4582,
                "name": "« c'est » ou « s'est » ? « ce sont » ou « se sont » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4572,
                "name": "« la plupart est » ou « la plupart sont » ?",
                "difficultyLevel": 16
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 16
              },
              {
                "id": 3218,
                "name":
                  "« personel » ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 15
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-18",
              "sumscore": 67.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-20",
              "sumscore": 120.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-23",
              "sumscore": 140.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805222,
          "fullName": faker.name.findName(),
          "time": 302,
          "score": { "sum": 140, "count": 364 },
          "initialLevel": { "sum": 60, "count": 140 },
          "initialEval": 43,
          "lastConnection": "2018-11-28",
          "connectionsNbr": 22,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 62
              },
              {
                "id": 4624,
                "name":
                  "« on a, on en, on y » ou « on n'a, on n'en, on n'y » ?",
                "difficultyLevel": 56
              },
              {
                "id": 4665,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 46
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 42
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 40
              }
            ],
            "known": [
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 53
              },
              {
                "id": 4638,
                "name": "« -ions » ou « -iions » ? « -iez » ou « -iiez » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4654,
                "name": "« à l'instar de » ",
                "difficultyLevel": 24
              },
              {
                "id": 4620,
                "name": "« fond » ou « fonds » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 20
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-19",
              "sumscore": 12.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-20",
              "sumscore": 21.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-22",
              "sumscore": 31.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-24",
              "sumscore": 35.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-25",
              "sumscore": 45.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-27",
              "sumscore": 61.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-28",
              "sumscore": 66.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-29",
              "sumscore": 73.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-01",
              "sumscore": 98.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-02",
              "sumscore": 99.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-18",
              "sumscore": 100.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-26",
              "sumscore": 105.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-28",
              "sumscore": 140.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805223,
          "fullName": faker.name.findName(),
          "time": 329,
          "score": { "sum": 133, "count": 364 },
          "initialLevel": { "sum": 73, "count": 133 },
          "initialEval": 52,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 30,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4729,
                "name": "« du » ou « dû » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 16
              },
              {
                "id": 4613,
                "name": "« ci-joint » ou « ci-jointe » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4604,
                "name": "« -euil » ou « -ueil » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4650,
                "name": "« sans dessus dessous » ou « sens dessus dessous » ?",
                "difficultyLevel": 12
              }
            ],
            "acquired": [
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 52
              },
              {
                "id": 4609,
                "name": "« voir » ou « voire » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4629,
                "name": "« tache » ou « tâche » ?",
                "difficultyLevel": 16
              }
            ],
            "known": [
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 28
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 27
              },
              { "id": 4589, "name": "« c » ou « ç » ?", "difficultyLevel": 22 },
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 20
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-07",
              "sumscore": 34.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-15",
              "sumscore": 48.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-06",
              "sumscore": 60.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-03",
              "sumscore": 75.64,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-07",
              "sumscore": 87.52,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-10",
              "sumscore": 99.46,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-12",
              "sumscore": 124.44,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 133.32,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805220,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 55, "count": 364 },
          "initialLevel": { "sum": 17, "count": 55 },
          "initialEval": 12,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805221,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 105, "count": 364 },
          "initialLevel": { "sum": 65, "count": 105 },
          "initialEval": 46,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805298,
          "fullName": faker.name.findName(),
          "time": 29,
          "score": { "sum": 114, "count": 364 },
          "initialLevel": { "sum": 92, "count": 114 },
          "initialEval": 66,
          "lastConnection": "2019-03-18",
          "connectionsNbr": 3,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4559,
                "name": "« cauchemar » ou « cauchemard » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4572,
                "name": "« la plupart est » ou « la plupart sont » ?",
                "difficultyLevel": 4
              },
              {
                "id": 4564,
                "name": "« quand » ou « qu'en » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 2
              },
              { "id": 4538, "name": "« ou » ou « où » ?", "difficultyLevel": 2 }
            ],
            "known": [
              { "id": 4537, "name": "« a » ou « à » ?", "difficultyLevel": 7 },
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4534,
                "name": "« son » ou « sont » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4535,
                "name": "« avenir » ou « à venir » ?",
                "difficultyLevel": 3
              }
            ]
          },
          "progData": [
            {
              "date": "2019-03-11",
              "sumscore": 14.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-18",
              "sumscore": 42.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805296,
          "fullName": faker.name.findName(),
          "time": 151,
          "score": { "sum": 111, "count": 364 },
          "initialLevel": { "sum": 45, "count": 111 },
          "initialEval": 32,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 9,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 33
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 19
              },
              {
                "id": 4580,
                "name": "« hors » ou « or » ?",
                "difficultyLevel": 9
              },
              {
                "id": 4583,
                "name": "«  tu tries » ou « tu tris » ? ",
                "difficultyLevel": 8
              },
              {
                "id": 4631,
                "name": "« pause » ou « pose » ?",
                "difficultyLevel": 7
              }
            ],
            "acquired": [
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4604,
                "name": "« -euil » ou « -ueil » ?",
                "difficultyLevel": 16
              },
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4573,
                "name": "« ni » ou « n'y » ?",
                "difficultyLevel": 14
              }
            ],
            "known": [
              {
                "id": 4562,
                "name": "« ces » ou « ses » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4586,
                "name": "« voie » ou « voix » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4571,
                "name": "« plus tôt » ou « plutôt » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4605,
                "name": "« certe » ou « certes » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4598,
                "name": "« peut être » ou « peut-être » ?",
                "difficultyLevel": 11
              }
            ]
          },
          "progData": [
            {
              "date": "2019-04-01",
              "sumscore": 94.92,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805297,
          "fullName": faker.name.findName(),
          "time": 252,
          "score": { "sum": 112, "count": 364 },
          "initialLevel": { "sum": 38, "count": 112 },
          "initialEval": 27,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 30,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4541,
                "name": "« vous parler » ou « vous parlez » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 17
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 10
              },
              {
                "id": 4639,
                "name": "« différend » ou « différent » ?",
                "difficultyLevel": 8
              }
            ],
            "acquired": [
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 78
              },
              {
                "id": 4603,
                "name": "« davantage » ou « d'avantage(s) » ?",
                "difficultyLevel": 41
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 34
              },
              {
                "id": 4604,
                "name": "« -euil » ou « -ueil » ?",
                "difficultyLevel": 31
              },
              {
                "id": 4556,
                "name": "« est » ou « et » ?",
                "difficultyLevel": 27
              }
            ],
            "known": [
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4583,
                "name": "« tu tries » ou « tu tris » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 17
              }
            ]
          },
          "progData": [
            { "date": "2018-11-21", "sumscore": 24.0, "moduleName": "Pro" },
            { "date": "2019-01-02", "sumscore": 62.64, "moduleName": "Pro" },
            { "date": "2019-01-07", "sumscore": 69.52, "moduleName": "Pro" },
            { "date": "2019-04-01", "sumscore": 83.159996, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805290,
          "fullName": faker.name.findName(),
          "time": 137,
          "score": { "sum": 129, "count": 364 },
          "initialLevel": { "sum": 89, "count": 129 },
          "initialEval": 64,
          "lastConnection": "2019-04-03",
          "connectionsNbr": 26,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 11
              }
            ],
            "acquired": [
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 56
              },
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4642,
                "name": "« des tuniques bleu foncé » ou « bleues foncées » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4627,
                "name": "« un » ou « une » espèce de ?",
                "difficultyLevel": 14
              }
            ],
            "known": [
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4572,
                "name": "« la plupart est » ou « la plupart sont » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4535,
                "name": "« avenir » ou « à venir » ?",
                "difficultyLevel": 12
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-22",
              "sumscore": 10.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-23",
              "sumscore": 22.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-03",
              "sumscore": 42.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-06",
              "sumscore": 76.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-07",
              "sumscore": 111.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-03",
              "sumscore": 123.88,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805291,
          "fullName": faker.name.findName(),
          "time": 14,
          "score": { "sum": 65, "count": 364 },
          "initialLevel": { "sum": 29, "count": 65 },
          "initialEval": 21,
          "lastConnection": "2019-03-08",
          "connectionsNbr": 2,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 6
              },
              {
                "id": 4566,
                "name": "« en fesant » ou « en faisant » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4540,
                "name": "« dans » ou « d'en » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4564,
                "name": "« quand » ou « qu'en » ?",
                "difficultyLevel": 2
              }
            ],
            "acquired": [
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4556,
                "name": "« est » ou « et » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4539,
                "name": "« ça », « çà » ou « sa » ?",
                "difficultyLevel": 2
              }
            ],
            "known": [
              {
                "id": 4565,
                "name": "« mieu » ou « mieux » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4548,
                "name": "« je le savais » ou « je le savait » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4552,
                "name": "« je peux » ou « je peut » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 2
              },
              {
                "id": 4549,
                "name": "« nous nous amusont » ou « nous nous amusons » ?",
                "difficultyLevel": 2
              }
            ]
          },
          "progData": [
            { "date": "2019-03-08", "sumscore": 11.76, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805288,
          "fullName": faker.name.findName(),
          "time": 516,
          "score": { "sum": 265, "count": 364 },
          "initialLevel": { "sum": 93, "count": 265 },
          "initialEval": 42,
          "lastConnection": "2019-03-14",
          "connectionsNbr": 42,
          "lastModule": "Excellence",
          "topNRules": {
            "focused": [
              {
                "id": 8844,
                "name": "« il convainc » ou « il convint » ?",
                "difficultyLevel": 19
              },
              {
                "id": 8894,
                "name":
                  "« elle a l'air sérieux » ou « elle a l'air sérieuse » ?",
                "difficultyLevel": 16
              },
              {
                "id": 8899,
                "name": "« ledit véhicule », « la loi susdite »",
                "difficultyLevel": 16
              },
              {
                "id": 8904,
                "name": "« vu les résultats », « excepté les erreurs »",
                "difficultyLevel": 14
              },
              {
                "id": 8887,
                "name": "« initier une personne » mais « lancer un projet »",
                "difficultyLevel": 13
              }
            ],
            "acquired": [
              {
                "id": 7978,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 61
              },
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 55
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 51
              },
              {
                "id": 7984,
                "name":
                  "L'usage ou non de la virgule autour des propositions relatives",
                "difficultyLevel": 51
              },
              {
                "id": 7993,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 37
              }
            ],
            "known": [
              {
                "id": 4663,
                "name": "« tout énervée » ou « toute énervée » ?",
                "difficultyLevel": 36
              },
              {
                "id": 4578,
                "name": "« qu'il ait » ou « qu'il est » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 18
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-19",
              "sumscore": 10.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-20",
              "sumscore": 19.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-21",
              "sumscore": 28.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-27",
              "sumscore": 34.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-29",
              "sumscore": 53.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-08",
              "sumscore": 71.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-12",
              "sumscore": 83.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-25",
              "sumscore": 92.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-31",
              "sumscore": 102.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-01",
              "sumscore": 105.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-03",
              "sumscore": 140.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-05",
              "sumscore": 153.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-02-27",
              "sumscore": 160.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-03-01",
              "sumscore": 206.92,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-03-02",
              "sumscore": 221.48,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-03-14",
              "sumscore": 265.91998,
              "moduleName": "Excellence"
            }
          ]
        },
        {
          "id": 3805289,
          "fullName": faker.name.findName(),
          "time": 154,
          "score": { "sum": 127, "count": 364 },
          "initialLevel": { "sum": 58, "count": 127 },
          "initialEval": 41,
          "lastConnection": "2018-11-18",
          "connectionsNbr": 13,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4640,
                "name": "« parti » ou « partie » ?",
                "difficultyLevel": 31
              },
              {
                "id": 4633,
                "name": "« soi-disant » ou « soit-disant » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 8
              },
              {
                "id": 4635,
                "name": "« quelque » ou « quel que » ?",
                "difficultyLevel": 8
              },
              {
                "id": 4645,
                "name":
                  "« un chiffre d'affaire » ou « un chiffre d'affaires » ?",
                "difficultyLevel": 8
              }
            ],
            "acquired": [
              {
                "id": 4727,
                "name":
                  "« lui même » ou « lui-même » ? « eux-même » ou « eux-mêmes » ?",
                "difficultyLevel": 47
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 41
              },
              {
                "id": 4739,
                "name": "« vingt » ou « vingts » ?",
                "difficultyLevel": 34
              },
              {
                "id": 4612,
                "name":
                  "« ce faisant » ou « se faisant » ? « pour ce faire » ou « pour se faire » ?",
                "difficultyLevel": 30
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 23
              }
            ],
            "known": [
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 50
              },
              {
                "id": 4604,
                "name": "« -euil » ou « -ueil » ?",
                "difficultyLevel": 37
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 13
              },
              {
                "id": 4603,
                "name": "« davantage » ou « d'avantage(s) » ?",
                "difficultyLevel": 12
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-17",
              "sumscore": 97.28,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-18",
              "sumscore": 127.32,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805294,
          "fullName": faker.name.findName(),
          "time": 45,
          "score": { "sum": 68, "count": 364 },
          "initialLevel": { "sum": 33, "count": 68 },
          "initialEval": 24,
          "lastConnection": "2019-04-05",
          "connectionsNbr": 6,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              { "id": 4537, "name": "« a » ou « à » ?", "difficultyLevel": 13 },
              {
                "id": 4538,
                "name": "« ou » ou « où » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4569,
                "name": "« tous les » ou « tout les » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4577,
                "name": "« un envoie » ou « un envoi » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4574,
                "name": "« quand » ou « quant » ?",
                "difficultyLevel": 5
              }
            ],
            "acquired": [
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4541,
                "name": "« vous parler » ou « vous parlez » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4734,
                "name": "« un employé » ou « un employer » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 5
              }
            ],
            "known": [
              {
                "id": 4556,
                "name": "« est » ou « et » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4578,
                "name": "« qu'il ait » ou « qu'il est » ?",
                "difficultyLevel": 10
              },
              {
                "id": 4582,
                "name": "« c'est » ou « s'est » ? « ce sont » ou « se sont » ?",
                "difficultyLevel": 9
              },
              {
                "id": 4549,
                "name": "« nous nous amusont » ou « nous nous amusons » ?",
                "difficultyLevel": 7
              }
            ]
          },
          "progData": [
            { "date": "2019-04-03", "sumscore": 20.88, "moduleName": "Pro" },
            { "date": "2019-04-05", "sumscore": 34.28, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3890159,
          "fullName": faker.name.findName(),
          "time": 134,
          "score": { "sum": 140, "count": 364 },
          "initialLevel": { "sum": 102, "count": 140 },
          "initialEval": 73,
          "lastConnection": "2019-03-07",
          "connectionsNbr": 17,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4624,
                "name":
                  "« on a, on en, on y » ou « on n'a, on n'en, on n'y » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4623,
                "name": "« quoique » ou « quoi que » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4640,
                "name": "« parti » ou « partie » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4627,
                "name": "« un » ou « une » espèce de ?",
                "difficultyLevel": 16
              }
            ],
            "known": [
              {
                "id": 4638,
                "name": "« -ions » ou « -iions » ? « -iez » ou « -iiez » ?",
                "difficultyLevel": 31
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 19
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-20",
              "sumscore": 75.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-26",
              "sumscore": 85.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-02-26",
              "sumscore": 106.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-02-28",
              "sumscore": 129.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-07",
              "sumscore": 140.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805295,
          "fullName": faker.name.findName(),
          "time": 568,
          "score": { "sum": 290, "count": 364 },
          "initialLevel": { "sum": 126, "count": 290 },
          "initialEval": 55,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 38,
          "lastModule": "Excellence",
          "topNRules": {
            "focused": [
              {
                "id": 7993,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 75
              },
              {
                "id": 4624,
                "name":
                  "« on a, on en, on y » ou « on n'a, on n'en, on n'y » ?",
                "difficultyLevel": 54
              },
              {
                "id": 8816,
                "name": "« négligent » et « négligence »",
                "difficultyLevel": 45
              },
              {
                "id": 8818,
                "name": "« fatigant » ou « fatiguant » ?",
                "difficultyLevel": 43
              },
              {
                "id": 8901,
                "name": "« vu » ou « vue » ?",
                "difficultyLevel": 35
              }
            ],
            "acquired": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 51
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 45
              },
              {
                "id": 4642,
                "name": "« des tuniques bleu foncé » ou « bleues foncées » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4729,
                "name": "« du » ou « dû » ?",
                "difficultyLevel": 20
              }
            ],
            "known": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 87
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 37
              },
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 16
              },
              {
                "id": 4625,
                "name":
                  "« ils sont debouts » ou « ils sont debout » ? « ils sont ensembles » ou « ils sont ensemble » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4730,
                "name":
                  "« apeller » ou « appeler » ? « rapelle » ou « rappelle » ?",
                "difficultyLevel": 11
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-05",
              "sumscore": 13.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-08",
              "sumscore": 36.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-25",
              "sumscore": 60.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-01",
              "sumscore": 69.94,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-28",
              "sumscore": 111.46,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-29",
              "sumscore": 144.74,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-02",
              "sumscore": 162.08,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-03",
              "sumscore": 217.44,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-01-04",
              "sumscore": 231.88,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-01-05",
              "sumscore": 250.28,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-01-06",
              "sumscore": 268.62,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-02-27",
              "sumscore": 282.94,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-04-01",
              "sumscore": 290.22,
              "moduleName": "Excellence"
            }
          ]
        },
        {
          "id": 3805292,
          "fullName": faker.name.findName(),
          "time": 266,
          "score": { "sum": 108, "count": 364 },
          "initialLevel": { "sum": 30, "count": 108 },
          "initialEval": 21,
          "lastConnection": "2019-01-06",
          "connectionsNbr": 19,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 38
              },
              {
                "id": 4573,
                "name": "« ni » ou « n'y » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4612,
                "name":
                  "« ce faisant » ou « se faisant » ? « pour ce faire » ou « pour se faire » ?",
                "difficultyLevel": 8
              },
              {
                "id": 4730,
                "name":
                  "« apeller » ou « appeler » ? « rapelle » ou « rappelle » ?",
                "difficultyLevel": 6
              }
            ],
            "acquired": [
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 42
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 37
              },
              {
                "id": 4603,
                "name": "« davantage » ou « d'avantage(s) » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4553,
                "name": "« il travail » ou « il travaille » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4583,
                "name": "« tu tries » ou « tu tris » ?",
                "difficultyLevel": 18
              }
            ],
            "known": [
              {
                "id": 4586,
                "name": "« voie » ou « voix » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4582,
                "name": "« c'est » ou « s'est » ? « ce sont » ou « se sont » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 16
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 11
              }
            ]
          },
          "progData": [
            { "date": "2018-12-27", "sumscore": 9.0, "moduleName": "Pro" },
            { "date": "2018-12-29", "sumscore": 17.0, "moduleName": "Pro" },
            { "date": "2019-01-03", "sumscore": 30.94, "moduleName": "Pro" },
            { "date": "2019-01-04", "sumscore": 52.7, "moduleName": "Pro" },
            { "date": "2019-01-06", "sumscore": 78.46, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805293,
          "fullName": faker.name.findName(),
          "time": 104,
          "score": { "sum": 93, "count": 364 },
          "initialLevel": { "sum": 22, "count": 93 },
          "initialEval": 16,
          "lastConnection": "2019-01-08",
          "connectionsNbr": 8,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 42
              },
              {
                "id": 4541,
                "name": "« vous parler » ou « vous parlez » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4578,
                "name": "« qu'il ait » ou « qu'il est » ?",
                "difficultyLevel": 3
              }
            ],
            "acquired": [
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4577,
                "name": "« un envoie » ou « un envoi » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4573,
                "name": "« ni » ou « n'y » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4534,
                "name": "« son » ou « sont » ?",
                "difficultyLevel": 7
              }
            ],
            "known": [
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4540,
                "name": "« dans » ou « d'en » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4539,
                "name": "« ça », « çà » ou « sa » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4547,
                "name": "« on » ou « ont » ?",
                "difficultyLevel": 3
              }
            ]
          },
          "progData": [
            { "date": "2018-11-19", "sumscore": 7.0, "moduleName": "Pro" },
            { "date": "2018-11-20", "sumscore": 20.88, "moduleName": "Pro" },
            { "date": "2019-01-08", "sumscore": 32.879997, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805282,
          "fullName": faker.name.findName(),
          "time": 22,
          "score": { "sum": 106, "count": 364 },
          "initialLevel": { "sum": 44, "count": 106 },
          "initialEval": 31,
          "lastConnection": "2018-12-15",
          "connectionsNbr": 2,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 4
              }
            ],
            "acquired": [
              {
                "id": 4545,
                "name": "« connection » ou « connexion » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4557,
                "name": "« notre » ou « nôtre » ? « votre » ou « vôtre » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4552,
                "name": "« je peux » ou « je peut » ? ",
                "difficultyLevel": 3
              }
            ],
            "known": [
              {
                "id": 4542,
                "name": "« j'envoie » ou « j'envois » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4556,
                "name": "« est » ou « et » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4539,
                "name": "« ça », « çà » ou « sa » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4566,
                "name": "« en fesant » ou « en faisant » ? ",
                "difficultyLevel": 7
              },
              {
                "id": 4535,
                "name": "« avenir » ou « à venir » ?",
                "difficultyLevel": 6
              }
            ]
          },
          "progData": [
            {
              "date": "2018-12-14",
              "sumscore": 14.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-15",
              "sumscore": 27.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805283,
          "fullName": faker.name.findName(),
          "time": 517,
          "score": { "sum": 303, "count": 364 },
          "initialLevel": { "sum": 86, "count": 303 },
          "initialEval": 21,
          "lastConnection": "2019-03-31",
          "connectionsNbr": 66,
          "lastModule": "Excellence",
          "topNRules": {
            "focused": [
              {
                "id": 8952,
                "name": "accord après « le peu de »",
                "difficultyLevel": 100
              },
              {
                "id": 8921,
                "name": "« quelque… que » ou « quelques… que » ?",
                "difficultyLevel": 47
              },
              {
                "id": 8897,
                "name": "accord avec « plus d'un »",
                "difficultyLevel": 43
              },
              {
                "id": 8949,
                "name": "« il suffit seulement » : le pléonasme grammatical",
                "difficultyLevel": 43
              },
              {
                "id": 8906,
                "name": "« quelque » ou « quelques » ?",
                "difficultyLevel": 41
              }
            ],
            "acquired": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 117
              },
              {
                "id": 7978,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 57
              },
              {
                "id": 7993,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 51
              },
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 44
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 37
              }
            ],
            "known": [
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4604,
                "name": "« -euil » ou « -ueil » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4610,
                "name": "« presque » ou « presqu' » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4729,
                "name": "« du » ou « dû » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 10
              }
            ]
          },
          "progData": [
            { "date": "2018-10-18", "sumscore": 6.0, "moduleName": "Pro" },
            { "date": "2018-10-30", "sumscore": 29.0, "moduleName": "Pro" },
            { "date": "2018-11-07", "sumscore": 39.0, "moduleName": "Pro" },
            { "date": "2018-11-09", "sumscore": 46.0, "moduleName": "Pro" },
            { "date": "2018-11-20", "sumscore": 56.0, "moduleName": "Pro" },
            { "date": "2018-11-23", "sumscore": 58.0, "moduleName": "Pro" },
            { "date": "2018-12-04", "sumscore": 62.0, "moduleName": "Pro" },
            { "date": "2018-12-07", "sumscore": 73.0, "moduleName": "Pro" },
            { "date": "2018-12-10", "sumscore": 84.0, "moduleName": "Pro" },
            {
              "date": "2018-12-16",
              "sumscore": 96.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2018-12-22",
              "sumscore": 106.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2018-12-24",
              "sumscore": 107.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-01-01",
              "sumscore": 111.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-01-04",
              "sumscore": 129.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-01-08",
              "sumscore": 140.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-01-15",
              "sumscore": 147.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-17",
              "sumscore": 158.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-24",
              "sumscore": 164.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-02-07",
              "sumscore": 184.0,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-02-24",
              "sumscore": 197.0,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-03-02",
              "sumscore": 233.98,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-03-17",
              "sumscore": 243.98,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-03-28",
              "sumscore": 264.18,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-03-31",
              "sumscore": 303.68,
              "moduleName": "Excellence"
            }
          ]
        },
        {
          "id": 3805280,
          "fullName": faker.name.findName(),
          "time": 1262,
          "score": { "sum": 291, "count": 364 },
          "initialLevel": { "sum": 102, "count": 291 },
          "initialEval": 38,
          "lastConnection": "2019-04-06",
          "connectionsNbr": 110,
          "lastModule": "Excellence",
          "topNRules": {
            "focused": [
              {
                "id": 8938,
                "name":
                  "« Sa Majesté est prête » mais « Sa Majesté le roi est prêt »",
                "difficultyLevel": 79
              },
              {
                "id": 8818,
                "name": "« fatigant » ou « fatiguant » ?",
                "difficultyLevel": 67
              },
              {
                "id": 8889,
                "name": "« martyr » ou « martyre » ?",
                "difficultyLevel": 50
              },
              {
                "id": 8897,
                "name": "accord avec « plus d'un »",
                "difficultyLevel": 50
              },
              {
                "id": 8892,
                "name": "« chaos » ou « cahot » ?",
                "difficultyLevel": 49
              }
            ],
            "acquired": [
              {
                "id": 7976,
                "name":
                  "Guillemets : point avant ou après le guillemet fermant",
                "difficultyLevel": 72
              },
              {
                "id": 4727,
                "name":
                  "« lui même » ou « lui-même » ? « eux-même » ou « eux-mêmes » ?",
                "difficultyLevel": 67
              },
              {
                "id": 7983,
                "name": "Le mot « heure » en abrégé",
                "difficultyLevel": 60
              },
              {
                "id": 7989,
                "name":
                  "Premier Ministre, premier Ministre ou Premier ministre ; ministre des Affaires étrangères…",
                "difficultyLevel": 53
              },
              {
                "id": 7977,
                "name":
                  "Abréviation des nombres ordinaux : 1<SUP>er</SUP> ; 1<SUP>re</SUP> ; 2<SUP>e</SUP> ; 3<SUP>e</SUP>…",
                "difficultyLevel": 52
              }
            ],
            "known": [
              {
                "id": 4635,
                "name": "« quelque » ou « quel que » ?",
                "difficultyLevel": 39
              },
              {
                "id": 4542,
                "name": "« j'envoie » ou « j'envois » ?",
                "difficultyLevel": 37
              },
              {
                "id": 4618,
                "name": "« hormi » ou « hormis » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4610,
                "name": "« presque » ou « presqu' » ?",
                "difficultyLevel": 18
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-18",
              "sumscore": 65.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-25",
              "sumscore": 94.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-02",
              "sumscore": 99.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-04",
              "sumscore": 109.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-07",
              "sumscore": 111.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-28",
              "sumscore": 115.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-31",
              "sumscore": 143.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-01",
              "sumscore": 150.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-03",
              "sumscore": 157.0,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-01-04",
              "sumscore": 162.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-05",
              "sumscore": 169.0,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-01-06",
              "sumscore": 178.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-02-02",
              "sumscore": 179.0,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-02-09",
              "sumscore": 190.0,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-02-21",
              "sumscore": 204.8,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-03-07",
              "sumscore": 241.36,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-03-21",
              "sumscore": 255.8,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-03-28",
              "sumscore": 270.12,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-04-03",
              "sumscore": 284.32,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-04-06",
              "sumscore": 291.48,
              "moduleName": "Excellence"
            }
          ]
        },
        {
          "id": 3805281,
          "fullName": faker.name.findName(),
          "time": 108,
          "score": { "sum": 116, "count": 364 },
          "initialLevel": { "sum": 39, "count": 116 },
          "initialEval": 28,
          "lastConnection": "2019-01-06",
          "connectionsNbr": 21,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 28
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 14
              },
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4627,
                "name": "« un » ou « une » espèce de ?",
                "difficultyLevel": 1
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 1
              }
            ],
            "acquired": [
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 66
              },
              {
                "id": 4577,
                "name": "« un envoie » ou « un envoi » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4569,
                "name": "« tous les » ou « tout les » ?",
                "difficultyLevel": 16
              },
              {
                "id": 3218,
                "name":
                  "« personel ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4596,
                "name": "« langage » ou « language » ?",
                "difficultyLevel": 14
              }
            ],
            "known": [
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4582,
                "name": "« c'est » ou « s'est » ? « ce sont » ou « se sont » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4548,
                "name": "« je le savais » ou « je le savait » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4549,
                "name": "« nous nous amusont » ou « nous nous amusons » ?",
                "difficultyLevel": 15
              }
            ]
          },
          "progData": [
            { "date": "2018-11-25", "sumscore": 12.0, "moduleName": "Pro" },
            { "date": "2018-12-26", "sumscore": 29.0, "moduleName": "Pro" },
            { "date": "2018-12-29", "sumscore": 43.0, "moduleName": "Pro" },
            { "date": "2019-01-06", "sumscore": 73.64, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805286,
          "fullName": faker.name.findName(),
          "time": 311,
          "score": { "sum": 105, "count": 364 },
          "initialLevel": { "sum": 31, "count": 105 },
          "initialEval": 22,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 24,
          "lastModule": "Pont supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 29
              },
              {
                "id": 4609,
                "name": "« voir » ou « voire » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 21
              },
              {
                "id": 4533,
                "name": "participe passé conjugué avec l'auxiliaire « être »",
                "difficultyLevel": 10
              },
              {
                "id": 4599,
                "name": "« diagnostic » ou « diagnostique » ?",
                "difficultyLevel": 8
              }
            ],
            "acquired": [
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4611,
                "name": "« censé » ou « sensé » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4538,
                "name": "« ou » ou « où » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 21
              }
            ],
            "known": [
              {
                "id": 4657,
                "name": "« à l'attention de » ou « à l'intention de » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4562,
                "name": "« ces » ou « ses » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4571,
                "name": "« plus tôt » ou « plutôt » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 12
              }
            ]
          },
          "progData": [
            { "date": "2018-11-05", "sumscore": 9.0, "moduleName": "Pro" },
            { "date": "2019-01-03", "sumscore": 19.0, "moduleName": "Pro" },
            { "date": "2019-01-05", "sumscore": 40.0, "moduleName": "Pro" },
            { "date": "2019-01-06", "sumscore": 46.52, "moduleName": "Pro" },
            { "date": "2019-01-07", "sumscore": 52.52, "moduleName": "Pro" },
            { "date": "2019-01-27", "sumscore": 57.46, "moduleName": "Pro" },
            { "date": "2019-03-22", "sumscore": 69.34, "moduleName": "Pro" },
            { "date": "2019-03-31", "sumscore": 76.34, "moduleName": "Pro" },
            { "date": "2019-04-01", "sumscore": 88.1, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805287,
          "fullName": faker.name.findName(),
          "time": 268,
          "score": { "sum": 161, "count": 364 },
          "initialLevel": { "sum": 85, "count": 161 },
          "initialEval": 56,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 24,
          "lastModule": "Orthotypographie",
          "topNRules": {
            "focused": [
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 41
              },
              {
                "id": 7977,
                "name":
                  "Abréviation des nombres ordinaux : 1<SUP>er</SUP> ; 1<SUP>re</SUP> ; 2<SUP>e</SUP> ; 3<SUP>e</SUP>…",
                "difficultyLevel": 34
              },
              {
                "id": 7978,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 33
              },
              {
                "id": 7993,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 33
              },
              {
                "id": 7986,
                "name": "Ponctuation et espaces",
                "difficultyLevel": 23
              }
            ],
            "acquired": [
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 41
              },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4635,
                "name": "« quelque » ou « quel que » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4656,
                "name": "« éi » ou « éï » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4727,
                "name":
                  "« lui même » ou « lui-même » ? « eux-même » ou « eux-mêmes » ?",
                "difficultyLevel": 19
              }
            ],
            "known": [
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4592,
                "name": "« si il » ou « s'il » ?",
                "difficultyLevel": 16
              },
              {
                "id": 4598,
                "name": "« peut être » ou « peut-être » ?",
                "difficultyLevel": 16
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-16",
              "sumscore": 7.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-17",
              "sumscore": 40.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-19",
              "sumscore": 45.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-24",
              "sumscore": 72.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-09",
              "sumscore": 97.88,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-16",
              "sumscore": 111.52,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-06",
              "sumscore": 122.52,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-30",
              "sumscore": 135.5,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-03-31",
              "sumscore": 152.02,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-04-01",
              "sumscore": 161.90001,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805284,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 112, "count": 364 },
          "initialLevel": { "sum": 92, "count": 112 },
          "initialEval": 66,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805285,
          "fullName": faker.name.findName(),
          "time": 81,
          "score": { "sum": 99, "count": 364 },
          "initialLevel": { "sum": 66, "count": 99 },
          "initialEval": 47,
          "lastConnection": "2019-01-14",
          "connectionsNbr": 7,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 11
              },
              {
                "id": 4609,
                "name": "« voir » ou « voire » ?",
                "difficultyLevel": 10
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 6
              }
            ],
            "acquired": [
              {
                "id": 4600,
                "name": "« entretien » ou « entretient » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4610,
                "name": "« presque » ou « presqu' » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4596,
                "name": "« langage » ou « language » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4573,
                "name": "« ni » ou « n'y » ?",
                "difficultyLevel": 6
              },
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 6
              }
            ],
            "known": [
              { "id": 4537, "name": "« a » ou « à » ?", "difficultyLevel": 14 },
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4553,
                "name": "« il travail » ou « il travaille » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 7
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-31",
              "sumscore": 69.52,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-14",
              "sumscore": 83.03999,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805274,
          "fullName": faker.name.findName(),
          "time": 406,
          "score": { "sum": 140, "count": 364 },
          "initialLevel": { "sum": 47, "count": 140 },
          "initialEval": 34,
          "lastConnection": "2019-03-11",
          "connectionsNbr": 25,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 78
              },
              {
                "id": 4659,
                "name": "« lorsque » ou « lorsqu' »",
                "difficultyLevel": 47
              },
              {
                "id": 4635,
                "name": "« quelque » ou « quel que » ?",
                "difficultyLevel": 43
              },
              {
                "id": 4624,
                "name":
                  "« on a, on en, on y » ou « on n'a, on n'en, on n'y » ?",
                "difficultyLevel": 39
              },
              {
                "id": 4604,
                "name": "« -euil » ou « -ueil » ?",
                "difficultyLevel": 38
              }
            ],
            "known": [
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 54
              },
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 41
              },
              {
                "id": 4729,
                "name": "« du » ou « dû » ?",
                "difficultyLevel": 34
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 31
              },
              {
                "id": 4625,
                "name":
                  "« ils sont debouts » ou « ils sont debout » ? « ils sont ensembles » ou « ils sont ensemble » ?",
                "difficultyLevel": 27
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-05",
              "sumscore": 9.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-24",
              "sumscore": 23.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-09",
              "sumscore": 27.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-13",
              "sumscore": 47.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-16",
              "sumscore": 54.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-26",
              "sumscore": 56.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-27",
              "sumscore": 63.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-30",
              "sumscore": 64.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-02",
              "sumscore": 74.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-03",
              "sumscore": 95.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-03",
              "sumscore": 110.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-11",
              "sumscore": 140.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805275,
          "fullName": faker.name.findName(),
          "time": 577,
          "score": { "sum": 132, "count": 364 },
          "initialLevel": { "sum": 19, "count": 132 },
          "initialEval": 14,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 56,
          "lastModule": "Pont supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4622,
                "name":
                  "« exigeant » ou « exigent » ? « exigeance » ou « exigence » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4630,
                "name": "« inclue » ou « incluse » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4729,
                "name": "« du » ou « dû » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4631,
                "name": "« pause » ou « pose » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4597,
                "name": "« aie », « aies » ou « ais » ?",
                "difficultyLevel": 9
              }
            ],
            "acquired": [
              {
                "id": 4613,
                "name": "« ci-joint » ou « ci-jointe » ?",
                "difficultyLevel": 77
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 76
              },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 68
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 64
              },
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 56
              }
            ],
            "known": [
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 61
              },
              {
                "id": 4730,
                "name":
                  "« apeller » ou « appeler » ? « rapelle » ou « rappelle » ?",
                "difficultyLevel": 60
              },
              {
                "id": 4553,
                "name": "« il travail » ou « il travaille » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4580,
                "name": "« hors » ou « or » ?",
                "difficultyLevel": 20
              }
            ]
          },
          "progData": [
            { "date": "2018-11-22", "sumscore": 9.0, "moduleName": "Pro" },
            { "date": "2018-12-06", "sumscore": 13.0, "moduleName": "Pro" },
            { "date": "2018-12-09", "sumscore": 16.0, "moduleName": "Pro" },
            { "date": "2018-12-18", "sumscore": 25.0, "moduleName": "Pro" },
            { "date": "2018-12-25", "sumscore": 46.0, "moduleName": "Pro" },
            { "date": "2019-01-02", "sumscore": 51.0, "moduleName": "Pro" },
            { "date": "2019-01-06", "sumscore": 52.0, "moduleName": "Pro" },
            { "date": "2019-01-24", "sumscore": 63.0, "moduleName": "Pro" },
            { "date": "2019-01-30", "sumscore": 74.0, "moduleName": "Pro" },
            { "date": "2019-03-19", "sumscore": 84.0, "moduleName": "Pro" },
            {
              "date": "2019-03-23",
              "sumscore": 124.68,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 131.56,
              "moduleName": "Pont supérieur"
            }
          ]
        },
        {
          "id": 3805272,
          "fullName": faker.name.findName(),
          "time": 124,
          "score": { "sum": 139, "count": 364 },
          "initialLevel": { "sum": 101, "count": 139 },
          "initialEval": 72,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 12,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4632,
                "name": "« -gable » ou « -guable » ?",
                "difficultyLevel": 5
              }
            ],
            "acquired": [
              {
                "id": 4659,
                "name": "« lorsque » ou « lorsqu' »",
                "difficultyLevel": 19
              },
              {
                "id": 4665,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4662,
                "name": "« j'ai été » ou « je suis allé » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4622,
                "name":
                  "« exigeant » ou « exigent » ? « exigeance » ou « exigence » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4652,
                "name":
                  "« pallier quelque chose » ou « pallier à quelque chose » ?",
                "difficultyLevel": 11
              }
            ],
            "known": [
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4612,
                "name":
                  "« ce faisant » ou « se faisant » ? « pour ce faire » ou « pour se faire » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 13
              },
              {
                "id": 4609,
                "name": "« voir » ou « voire » ?",
                "difficultyLevel": 10
              },
              {
                "id": 4654,
                "name": "« à l'instar de » ",
                "difficultyLevel": 10
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-20",
              "sumscore": 14.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 139.88,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805273,
          "fullName": faker.name.findName(),
          "time": 1,
          "score": { "sum": 101, "count": 364 },
          "initialLevel": { "sum": 59, "count": 101 },
          "initialEval": 42,
          "lastConnection": "2018-10-25",
          "connectionsNbr": 1,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [],
            "known": [
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4539,
                "name": "« ça », « çà » ou « sa » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4548,
                "name": "« je le savais » ou « je le savait » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4550,
                "name":
                  "« tu mange » ou « tu manges » ? « tu mangera » ou « tu mangeras » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4565,
                "name": "« mieu » ou « mieux » ?",
                "difficultyLevel": 1
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-25",
              "sumscore": 14.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805278,
          "fullName": faker.name.findName(),
          "time": 143,
          "score": { "sum": 131, "count": 364 },
          "initialLevel": { "sum": 82, "count": 131 },
          "initialEval": 59,
          "lastConnection": "2019-03-31",
          "connectionsNbr": 16,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 8
              },
              {
                "id": 4739,
                "name": "« vingt » ou « vingts » ?",
                "difficultyLevel": 8
              },
              {
                "id": 4635,
                "name": "« quelque » ou « quel que » ?",
                "difficultyLevel": 6
              }
            ],
            "acquired": [
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 30
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 25
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4642,
                "name": "« des tuniques bleu foncé » ou « bleues foncées » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4641,
                "name": "« des nuages blanc » ou « des nuages blancs » ?",
                "difficultyLevel": 22
              }
            ],
            "known": [
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 32
              },
              {
                "id": 4610,
                "name": "« presque » ou « presqu' » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 15
              },
              {
                "id": 3218,
                "name":
                  "« personel » ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4547,
                "name": "« on » ou « ont » ?",
                "difficultyLevel": 13
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-25",
              "sumscore": 8.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-06",
              "sumscore": 49.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-25",
              "sumscore": 62.88,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-26",
              "sumscore": 73.880005,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-31",
              "sumscore": 131.40001,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805279,
          "fullName": faker.name.findName(),
          "time": 57,
          "score": { "sum": 105, "count": 364 },
          "initialLevel": { "sum": 71, "count": 105 },
          "initialEval": 51,
          "lastConnection": "2019-01-06",
          "connectionsNbr": 4,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4545,
                "name": "« connection » ou « connexion » ?",
                "difficultyLevel": 5
              }
            ],
            "acquired": [
              {
                "id": 4582,
                "name": "« c'est » ou « s'est » ? « ce sont » ou « se sont » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4557,
                "name": "« notre » ou « nôtre » ? « votre » ou « vôtre » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4559,
                "name": "« cauchemar » ou « cauchemard » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4577,
                "name": "« un envoie » ou « un envoi » ?",
                "difficultyLevel": 5
              }
            ],
            "known": [
              { "id": 4554, "name": "accent ou pas ?", "difficultyLevel": 12 },
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4569,
                "name": "« tous les » ou « tout les » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4607,
                "name": "« malgré » ou « malgrés » ?",
                "difficultyLevel": 10
              },
              {
                "id": 4540,
                "name": "« dans » ou « d'en » ?",
                "difficultyLevel": 9
              }
            ]
          },
          "progData": [
            {
              "date": "2019-01-06",
              "sumscore": 41.76,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805276,
          "fullName": faker.name.findName(),
          "time": 7,
          "score": { "sum": 68, "count": 364 },
          "initialLevel": { "sum": 39, "count": 68 },
          "initialEval": 28,
          "lastConnection": "2018-10-28",
          "connectionsNbr": 1,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4565,
                "name": "« mieu » ou « mieux » ?",
                "difficultyLevel": 2
              },
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 2
              }
            ],
            "known": [
              {
                "id": 4548,
                "name": "« je le savais » ou « je le savait » ?",
                "difficultyLevel": 2
              },
              {
                "id": 4552,
                "name": "« je peux » ou « je peut » ?",
                "difficultyLevel": 2
              },
              {
                "id": 4556,
                "name": "« est » ou « et » ?",
                "difficultyLevel": 2
              },
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4566,
                "name": "« en fesant » ou « en faisant » ?",
                "difficultyLevel": 1
              }
            ]
          },
          "progData": [
            { "date": "2018-10-28", "sumscore": 7.0, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805277,
          "fullName": faker.name.findName(),
          "time": 56,
          "score": { "sum": 82, "count": 364 },
          "initialLevel": { "sum": 40, "count": 82 },
          "initialEval": 29,
          "lastConnection": "2019-01-06",
          "connectionsNbr": 6,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 11
              },
              { "id": 4537, "name": "« a » ou « à » ?", "difficultyLevel": 9 },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4553,
                "name": "« il travail » ou « il travaille » ?",
                "difficultyLevel": 4
              },
              {
                "id": 4569,
                "name": "« tous les » ou « tout les » ?",
                "difficultyLevel": 4
              }
            ],
            "acquired": [
              {
                "id": 4538,
                "name": "« ou » ou « où » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4571,
                "name": "« plus tôt » ou « plutôt » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4556,
                "name": "« est » ou « et » ?",
                "difficultyLevel": 5
              }
            ],
            "known": [
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4550,
                "name":
                  "« tu mange » ou « tu manges » ? « tu mangera » ou « tu mangeras » ?",
                "difficultyLevel": 10
              },
              {
                "id": 4549,
                "name": "« nous nous amusont » ou « nous nous amusons » ?",
                "difficultyLevel": 8
              },
              {
                "id": 4577,
                "name": "« un envoie » ou « un envoi » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4573,
                "name": "« ni » ou « n'y » ?",
                "difficultyLevel": 6
              }
            ]
          },
          "progData": [
            { "date": "2019-01-06", "sumscore": 31.64, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805266,
          "fullName": faker.name.findName(),
          "time": 22,
          "score": { "sum": 123, "count": 364 },
          "initialLevel": { "sum": 55, "count": 123 },
          "initialEval": 39,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 3,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4550,
                "name":
                  "« tu mange » ou « tu manges » ? « tu mangera » ou « tu mangeras » ?",
                "difficultyLevel": 9
              },
              {
                "id": 4540,
                "name": "« dans » ou « d'en » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4557,
                "name": "« notre » ou « nôtre » ? « votre » ou « vôtre » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4588,
                "name": "« il se détend » ou « il se détent » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 3
              }
            ],
            "known": [
              {
                "id": 4578,
                "name": "« qu'il ait » ou « qu'il est » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 6
              },
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4534,
                "name": "« son » ou « sont » ?",
                "difficultyLevel": 3
              }
            ]
          },
          "progData": [
            {
              "date": "2019-04-01",
              "sumscore": 42.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805267,
          "fullName": faker.name.findName(),
          "time": 685,
          "score": { "sum": 237, "count": 364 },
          "initialLevel": { "sum": 87, "count": 237 },
          "initialEval": 43,
          "lastConnection": "2019-04-02",
          "connectionsNbr": 45,
          "lastModule": "Excellence",
          "topNRules": {
            "focused": [
              {
                "id": 8855,
                "name": "« les joueurs se jettent à l'envi sur la balle »",
                "difficultyLevel": 52
              },
              {
                "id": 8848,
                "name": "« merci pour » ou « merci de » ?",
                "difficultyLevel": 43
              },
              {
                "id": 8857,
                "name": "« céans », « séant » ou « seyant » ?",
                "difficultyLevel": 43
              },
              {
                "id": 8860,
                "name": "« hypo- » ou « hippo- » ?",
                "difficultyLevel": 41
              },
              {
                "id": 8887,
                "name": "« initier une personne » mais « lancer un projet »",
                "difficultyLevel": 40
              }
            ],
            "acquired": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 191
              },
              {
                "id": 7993,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 112
              },
              {
                "id": 7978,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 75
              },
              {
                "id": 4657,
                "name": "« à l'attention de » ou « à l'intention de » ?",
                "difficultyLevel": 70
              },
              {
                "id": 7984,
                "name":
                  "L'usage ou non de la virgule autour des propositions relatives",
                "difficultyLevel": 69
              }
            ],
            "known": [
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 41
              },
              {
                "id": 4662,
                "name": "« j'ai été » ou « je suis allé » ?",
                "difficultyLevel": 40
              },
              {
                "id": 4610,
                "name": "« presque » ou « presqu' » ?",
                "difficultyLevel": 39
              },
              {
                "id": 4652,
                "name":
                  "« pallier quelque chose » ou « pallier à quelque chose » ?",
                "difficultyLevel": 32
              },
              {
                "id": 4620,
                "name": "« fond » ou « fonds » ?",
                "difficultyLevel": 30
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-18",
              "sumscore": 63.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-06",
              "sumscore": 76.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-08",
              "sumscore": 85.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-13",
              "sumscore": 89.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-15",
              "sumscore": 123.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-18",
              "sumscore": 140.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-02-17",
              "sumscore": 147.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-03-03",
              "sumscore": 149.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-03-10",
              "sumscore": 150.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-03-12",
              "sumscore": 155.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-03-15",
              "sumscore": 164.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-03-17",
              "sumscore": 222.12,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-03-18",
              "sumscore": 236.68,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-04-02",
              "sumscore": 237.68,
              "moduleName": "Excellence"
            }
          ]
        },
        {
          "id": 3805264,
          "fullName": faker.name.findName(),
          "time": 811,
          "score": { "sum": 332, "count": 364 },
          "initialLevel": { "sum": 65, "count": 332 },
          "initialEval": 17,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 50,
          "lastModule": "Excellence",
          "topNRules": {
            "focused": [
              {
                "id": 8953,
                "name": "« béni » ou « bénit » ?",
                "difficultyLevel": 77
              },
              {
                "id": 8975,
                "name": "« Athéna, déesse éponyme d'Athènes »",
                "difficultyLevel": 61
              },
              {
                "id": 8969,
                "name": "« eut » ou « eût », « fut » ou « fût » ?",
                "difficultyLevel": 50
              },
              {
                "id": 8947,
                "name":
                  "« les bleu-vert », « les bleus ciel », « les bleus foncés »",
                "difficultyLevel": 49
              },
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 48
              }
            ],
            "acquired": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 54
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 30
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 21
              }
            ],
            "known": [
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4604,
                "name": "« -euil » ou « -ueil » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 12
              }
            ]
          },
          "progData": [
            { "date": "2018-10-26", "sumscore": 4.0, "moduleName": "Pro" },
            { "date": "2018-11-21", "sumscore": 15.0, "moduleName": "Pro" },
            { "date": "2018-12-08", "sumscore": 27.0, "moduleName": "Pro" },
            { "date": "2018-12-10", "sumscore": 41.0, "moduleName": "Pro" },
            { "date": "2018-12-16", "sumscore": 45.0, "moduleName": "Pro" },
            { "date": "2018-12-20", "sumscore": 47.0, "moduleName": "Pro" },
            {
              "date": "2019-01-02",
              "sumscore": 190.68,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-01-03",
              "sumscore": 305.84,
              "moduleName": "Excellence"
            },
            { "date": "2019-04-01", "sumscore": 332.6, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805265,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 80, "count": 364 },
          "initialLevel": { "sum": 46, "count": 80 },
          "initialEval": 33,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805270,
          "fullName": faker.name.findName(),
          "time": 444,
          "score": { "sum": 137, "count": 364 },
          "initialLevel": { "sum": 50, "count": 137 },
          "initialEval": 36,
          "lastConnection": "2019-03-08",
          "connectionsNbr": 17,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 102
              },
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 52
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 34
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4641,
                "name": "« des nuages blanc » ou « des nuages blancs » ?",
                "difficultyLevel": 22
              }
            ],
            "acquired": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 90
              },
              {
                "id": 4729,
                "name": "« du » ou « dû » ?",
                "difficultyLevel": 65
              },
              {
                "id": 4623,
                "name": "« quoique » ou « quoi que » ?",
                "difficultyLevel": 59
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 46
              },
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 37
              }
            ],
            "known": [
              {
                "id": 4613,
                "name": "« ci-joint » ou « ci-jointe » ?",
                "difficultyLevel": 41
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 40
              },
              {
                "id": 4638,
                "name": "« -ions » ou « -iions » ? « -iez » ou « -iiez » ?",
                "difficultyLevel": 29
              },
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 20
              }
            ]
          },
          "progData": [
            {
              "date": "2019-01-06",
              "sumscore": 24.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-07",
              "sumscore": 38.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-04",
              "sumscore": 88.86,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-08",
              "sumscore": 137.84,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805271,
          "fullName": faker.name.findName(),
          "time": 147,
          "score": { "sum": 116, "count": 364 },
          "initialLevel": { "sum": 52, "count": 116 },
          "initialEval": 37,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 7,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4598,
                "name": "« peut être » ou « peut-être » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 4
              }
            ],
            "acquired": [
              {
                "id": 4595,
                "name":
                  "« elle s'est fait faire » ou « elle s'est faite faire » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4583,
                "name": "«  tu tries » ou « tu tris » ? ",
                "difficultyLevel": 16
              },
              {
                "id": 4542,
                "name": "« j'envoie » ou « j'envois » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4631,
                "name": "« pause » ou « pose » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 12
              }
            ],
            "known": [
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 49
              },
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4608,
                "name": "« crée » ou « créée » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4569,
                "name": "« tous les » ou « tout les » ?",
                "difficultyLevel": 8
              },
              {
                "id": 4586,
                "name": "« voie » ou « voix » ?",
                "difficultyLevel": 8
              }
            ]
          },
          "progData": [
            {
              "date": "2019-01-06",
              "sumscore": 42.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 82.88,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805268,
          "fullName": faker.name.findName(),
          "time": 61,
          "score": { "sum": 115, "count": 364 },
          "initialLevel": { "sum": 80, "count": 115 },
          "initialEval": 57,
          "lastConnection": "2019-01-07",
          "connectionsNbr": 8,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4627,
                "name": "« un » ou « une » espèce de ?",
                "difficultyLevel": 1
              },
              { "id": 4729, "name": "« du » ou « dû » ?", "difficultyLevel": 1 }
            ],
            "acquired": [
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 30
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4596,
                "name": "« langage » ou « language » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4590,
                "name":
                  "« Est-ce que le repas est-il prêt ? » ou « Est-ce que le repas est prêt » ? ",
                "difficultyLevel": 15
              },
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 13
              }
            ],
            "known": [
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4533,
                "name": "participe passé conjugué avec l'auxiliaire « être »",
                "difficultyLevel": 18
              },
              {
                "id": 4557,
                "name": "« notre » ou « nôtre » ? « votre » ou « vôtre » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4572,
                "name": "« la plupart est » ou « la plupart sont » ?",
                "difficultyLevel": 13
              }
            ]
          },
          "progData": [
            {
              "date": "2019-01-06",
              "sumscore": 56.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-07",
              "sumscore": 91.76,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805269,
          "fullName": faker.name.findName(),
          "time": 409,
          "score": { "sum": 139, "count": 364 },
          "initialLevel": { "sum": 59, "count": 139 },
          "initialEval": 42,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 20,
          "lastModule": "Orthotypographie",
          "topNRules": {
            "focused": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 67
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 64
              },
              {
                "id": 4642,
                "name": "« des tuniques bleu foncé » ou « bleues foncées » ?",
                "difficultyLevel": 37
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 36
              },
              {
                "id": 4661,
                "name": "du bon usage de « s'avérer »",
                "difficultyLevel": 25
              }
            ],
            "acquired": [
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 60
              },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 49
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 44
              },
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 40
              },
              {
                "id": 4600,
                "name": "« entretien » ou « entretient » ?",
                "difficultyLevel": 38
              }
            ],
            "known": [
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 65
              },
              {
                "id": 4590,
                "name":
                  "« Est-ce que le repas est-il prêt ? » ou « Est-ce que le repas est prêt » ? ",
                "difficultyLevel": 53
              },
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 41
              },
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 29
              },
              {
                "id": 4641,
                "name": "« des nuages blanc » ou « des nuages blancs » ?",
                "difficultyLevel": 28
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-21",
              "sumscore": 8.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-22",
              "sumscore": 30.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-05",
              "sumscore": 33.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-06",
              "sumscore": 78.4,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 139.22,
              "moduleName": "Orthotypographie"
            }
          ]
        },
        {
          "id": 3805258,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 108, "count": 364 },
          "initialLevel": { "sum": 47, "count": 108 },
          "initialEval": 34,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805259,
          "fullName": faker.name.findName(),
          "time": 4,
          "score": { "sum": 69, "count": 364 },
          "initialLevel": { "sum": 12, "count": 69 },
          "initialEval": 9,
          "lastConnection": "2019-03-04",
          "connectionsNbr": 3,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4548,
                "name": "« je le savais » ou « je le savait » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4565,
                "name": "« mieu » ou « mieux » ?",
                "difficultyLevel": 3
              }
            ],
            "known": [
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4552,
                "name": "« je peux » ou « je peut » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4556,
                "name": "« est » ou « et » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4566,
                "name": "« en fesant » ou « en faisant » ?",
                "difficultyLevel": 2
              }
            ]
          },
          "progData": [
            { "date": "2019-03-04", "sumscore": 7.0, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805256,
          "fullName": faker.name.findName(),
          "time": 143,
          "score": { "sum": 121, "count": 364 },
          "initialLevel": { "sum": 55, "count": 121 },
          "initialEval": 39,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 10,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 39
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 34
              },
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 34
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 25
              },
              {
                "id": 4623,
                "name": "« quoique » ou « quoi que » ?",
                "difficultyLevel": 18
              }
            ],
            "acquired": [
              {
                "id": 4603,
                "name": "« davantage » ou « d'avantage(s) » ?",
                "difficultyLevel": 34
              },
              {
                "id": 4645,
                "name":
                  "« un chiffre d'affaire » ou « un chiffre d'affaires » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4557,
                "name": "« notre » ou « nôtre » ? « votre » ou « vôtre » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4631,
                "name": "« pause » ou « pose » ?",
                "difficultyLevel": 18
              }
            ],
            "known": [
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4600,
                "name": "« entretien » ou « entretient » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 12
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-17",
              "sumscore": 11.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-18",
              "sumscore": 28.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-23",
              "sumscore": 49.64,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-06",
              "sumscore": 83.28,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 96.799995,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805257,
          "fullName": faker.name.findName(),
          "time": 442,
          "score": { "sum": 156, "count": 364 },
          "initialLevel": { "sum": 52, "count": 156 },
          "initialEval": 35,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 33,
          "lastModule": "Orthotypographie",
          "topNRules": {
            "focused": [
              {
                "id": 7993,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 41
              },
              {
                "id": 7979,
                "name": "Abréviations : M<SUP>me</SUP> ; M<SUP>lle</SUP>",
                "difficultyLevel": 15
              },
              {
                "id": 7985,
                "name": "Éviter d'avoir deux deux-points dans une même phrase",
                "difficultyLevel": 14
              },
              {
                "id": 7980,
                "name": "Kg ou kg ou KG (kilogramme)",
                "difficultyLevel": 13
              },
              {
                "id": 7983,
                "name": "Le mot « heure » en abrégé",
                "difficultyLevel": 12
              }
            ],
            "acquired": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 95
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 87
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 82
              },
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 70
              },
              {
                "id": 4657,
                "name": "« à l'attention de » ou « à l'intention de » ?",
                "difficultyLevel": 55
              }
            ],
            "known": [
              {
                "id": 4620,
                "name": "« fond » ou « fonds » ?",
                "difficultyLevel": 42
              },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 36
              },
              {
                "id": 4727,
                "name":
                  "« lui même » ou « lui-même » ? « eux-même » ou « eux-mêmes » ?",
                "difficultyLevel": 25
              },
              { "id": 4537, "name": "« a » ou « à » ?", "difficultyLevel": 21 },
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 19
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-20",
              "sumscore": 5.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-21",
              "sumscore": 12.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-22",
              "sumscore": 23.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-23",
              "sumscore": 30.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-09",
              "sumscore": 36.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-12",
              "sumscore": 48.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-15",
              "sumscore": 50.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-19",
              "sumscore": 68.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-23",
              "sumscore": 70.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-05",
              "sumscore": 71.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-20",
              "sumscore": 86.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-02-22",
              "sumscore": 122.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 156.2,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805262,
          "fullName": faker.name.findName(),
          "time": 614,
          "score": { "sum": 138, "count": 364 },
          "initialLevel": { "sum": 30, "count": 138 },
          "initialEval": 21,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 49,
          "lastModule": "Pont supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 110
              },
              {
                "id": 4738,
                "name": "« cent » ou « cents » ?",
                "difficultyLevel": 80
              },
              {
                "id": 4739,
                "name": "« vingt » ou « vingts » ?",
                "difficultyLevel": 56
              },
              {
                "id": 4642,
                "name": "« des tuniques bleu foncé » ou « bleues foncées » ?",
                "difficultyLevel": 51
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 32
              }
            ],
            "acquired": [
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 155
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 93
              },
              {
                "id": 4578,
                "name": "« qu'il ait » ou « qu'il est » ?",
                "difficultyLevel": 92
              },
              {
                "id": 4657,
                "name": "« à l'attention de » ou « à l'intention de » ?",
                "difficultyLevel": 73
              },
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 62
              }
            ],
            "known": [
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 86
              },
              {
                "id": 4624,
                "name":
                  "« on a, on en, on y » ou « on n'a, on n'en, on n'y » ?",
                "difficultyLevel": 67
              },
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 61
              },
              {
                "id": 3218,
                "name":
                  "« personel ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4547,
                "name": "« on » ou « ont » ?",
                "difficultyLevel": 25
              }
            ]
          },
          "progData": [
            { "date": "2018-11-18", "sumscore": 7.0, "moduleName": "Pro" },
            { "date": "2018-11-19", "sumscore": 14.0, "moduleName": "Pro" },
            { "date": "2018-11-21", "sumscore": 23.0, "moduleName": "Pro" },
            { "date": "2018-11-27", "sumscore": 30.0, "moduleName": "Pro" },
            { "date": "2018-11-30", "sumscore": 33.0, "moduleName": "Pro" },
            { "date": "2018-12-29", "sumscore": 50.0, "moduleName": "Pro" },
            { "date": "2018-12-31", "sumscore": 51.0, "moduleName": "Pro" },
            { "date": "2019-01-05", "sumscore": 63.0, "moduleName": "Pro" },
            { "date": "2019-01-17", "sumscore": 84.0, "moduleName": "Pro" },
            {
              "date": "2019-01-24",
              "sumscore": 87.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-01-29",
              "sumscore": 90.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-02-26",
              "sumscore": 92.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-03-26",
              "sumscore": 113.88,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-03-28",
              "sumscore": 125.46,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 138.34,
              "moduleName": "Pont supérieur"
            }
          ]
        },
        {
          "id": 3805263,
          "fullName": faker.name.findName(),
          "time": 128,
          "score": { "sum": 111, "count": 364 },
          "initialLevel": { "sum": 67, "count": 111 },
          "initialEval": 48,
          "lastConnection": "2019-03-12",
          "connectionsNbr": 7,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              { "id": 4554, "name": "accent ou pas ?", "difficultyLevel": 28 },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4631,
                "name": "« pause » ou « pose » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4571,
                "name": "« plus tôt » ou « plutôt » ?",
                "difficultyLevel": 11
              }
            ],
            "acquired": [
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4592,
                "name": "« si il » ou « s'il » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4542,
                "name": "« j'envoie » ou « j'envois » ?",
                "difficultyLevel": 6
              },
              {
                "id": 4557,
                "name": "« notre » ou « nôtre » ? « votre » ou « vôtre » ?",
                "difficultyLevel": 6
              }
            ],
            "known": [
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4535,
                "name": "« avenir » ou « à venir » ?",
                "difficultyLevel": 14
              },
              { "id": 4537, "name": "« a » ou « à » ?", "difficultyLevel": 11 },
              {
                "id": 4734,
                "name": "« un employé » ou « un employer » ?",
                "difficultyLevel": 10
              }
            ]
          },
          "progData": [
            {
              "date": "2019-03-11",
              "sumscore": 41.4,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-12",
              "sumscore": 80.04,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805260,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 124, "count": 364 },
          "initialLevel": { "sum": 73, "count": 124 },
          "initialEval": 52,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805261,
          "fullName": faker.name.findName(),
          "time": 309,
          "score": { "sum": 139, "count": 364 },
          "initialLevel": { "sum": 112, "count": 139 },
          "initialEval": 80,
          "lastConnection": "2019-03-31",
          "connectionsNbr": 15,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4662,
                "name": "« j'ai été » ou « je suis allé » ?",
                "difficultyLevel": 23
              }
            ],
            "acquired": [
              {
                "id": 4572,
                "name": "« la plupart est » ou « la plupart sont » ?",
                "difficultyLevel": 29
              },
              {
                "id": 4665,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 29
              },
              {
                "id": 4635,
                "name": "« quelque » ou « quel que » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4738,
                "name": "« cent » ou « cents » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4731,
                "name":
                  "« les lundi » ou « les lundis » ? « les lundis soir » ou « les lundis soirs » ?",
                "difficultyLevel": 19
              }
            ],
            "known": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 49
              },
              {
                "id": 4623,
                "name": "« quoique » ou « quoi que » ?",
                "difficultyLevel": 46
              },
              {
                "id": 4730,
                "name":
                  "« apeller » ou « appeler » ? « rapelle » ou « rappelle » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4657,
                "name": "« à l'attention de » ou « à l'intention de » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 22
              }
            ]
          },
          "progData": [
            {
              "date": "2018-12-18",
              "sumscore": 25.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-20",
              "sumscore": 35.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-07",
              "sumscore": 66.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-08",
              "sumscore": 81.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-30",
              "sumscore": 126.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-31",
              "sumscore": 139.88,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805250,
          "fullName": faker.name.findName(),
          "time": 284,
          "score": { "sum": 140, "count": 364 },
          "initialLevel": { "sum": 83, "count": 140 },
          "initialEval": 59,
          "lastConnection": "2019-03-22",
          "connectionsNbr": 20,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 53
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 46
              },
              {
                "id": 4638,
                "name": "« -ions » ou « -iions » ? « -iez » ou « -iiez » ?",
                "difficultyLevel": 46
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4663,
                "name": "« tout énervée » ou « toute énervée » ?",
                "difficultyLevel": 32
              }
            ],
            "known": [
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 41
              },
              {
                "id": 4665,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 39
              },
              {
                "id": 4590,
                "name":
                  "« Est-ce que le repas est-il prêt ? » ou « Est-ce que le repas est prêt » ? ",
                "difficultyLevel": 27
              },
              {
                "id": 4642,
                "name": "« des tuniques bleu foncé » ou « bleues foncées » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4587,
                "name": "« huit heure » ou « huit heures » ?",
                "difficultyLevel": 23
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-05",
              "sumscore": 12.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-27",
              "sumscore": 44.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-31",
              "sumscore": 64.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-05",
              "sumscore": 70.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-06",
              "sumscore": 74.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-07",
              "sumscore": 94.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-18",
              "sumscore": 103.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-19",
              "sumscore": 104.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-22",
              "sumscore": 140.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805251,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 0, "count": 224 },
          "initialLevel": { "sum": 0, "count": 0 },
          "initialEval": null,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805248,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 109, "count": 364 },
          "initialLevel": { "sum": 51, "count": 109 },
          "initialEval": 36,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805249,
          "fullName": faker.name.findName(),
          "time": 325,
          "score": { "sum": 139, "count": 364 },
          "initialLevel": { "sum": 61, "count": 139 },
          "initialEval": 44,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 26,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4665,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 32
              }
            ],
            "acquired": [
              {
                "id": 4739,
                "name": "« vingt » ou « vingts » ?",
                "difficultyLevel": 62
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 47
              },
              {
                "id": 4611,
                "name": "« censé » ou « sensé » ?",
                "difficultyLevel": 46
              },
              {
                "id": 4604,
                "name": "« -euil » ou « -ueil » ?",
                "difficultyLevel": 44
              },
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 42
              }
            ],
            "known": [
              {
                "id": 4642,
                "name": "« des tuniques bleu foncé » ou « bleues foncées » ?",
                "difficultyLevel": 65
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 55
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 42
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4633,
                "name": "« soi-disant » ou « soit-disant » ?",
                "difficultyLevel": 33
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-19",
              "sumscore": 18.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-02",
              "sumscore": 30.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-03",
              "sumscore": 31.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-04",
              "sumscore": 49.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-07",
              "sumscore": 80.94,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-31",
              "sumscore": 111.94,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 139.94,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 4218939,
          "fullName": faker.name.findName(),
          "time": 116,
          "score": { "sum": 127, "count": 364 },
          "initialLevel": { "sum": 76, "count": 127 },
          "initialEval": 54,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 13,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4604,
                "name": "« -euil » ou « -ueil » ?",
                "difficultyLevel": 31
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 30
              },
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 13
              },
              {
                "id": 4541,
                "name": "« vous parler » ou « vous parlez » ?",
                "difficultyLevel": 12
              }
            ],
            "acquired": [
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4623,
                "name": "« quoique » ou « quoi que » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4730,
                "name":
                  "« apeller » ou « appeler » ? « rapelle » ou « rappelle » ?",
                "difficultyLevel": 21
              },
              {
                "id": 3218,
                "name":
                  "« personel » ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 14
              }
            ],
            "known": [
              {
                "id": 4640,
                "name": "« parti » ou « partie » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 23
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4557,
                "name": "« notre » ou « nôtre » ? « votre » ou « vôtre » ?",
                "difficultyLevel": 15
              }
            ]
          },
          "progData": [
            {
              "date": "2019-03-07",
              "sumscore": 51.76,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-28",
              "sumscore": 83.22,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 110.98,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805254,
          "fullName": faker.name.findName(),
          "time": 630,
          "score": { "sum": 163, "count": 364 },
          "initialLevel": { "sum": 55, "count": 163 },
          "initialEval": 34,
          "lastConnection": "2019-03-11",
          "connectionsNbr": 42,
          "lastModule": "Orthotypographie",
          "topNRules": {
            "focused": [
              {
                "id": 7993,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 70
              },
              {
                "id": 7984,
                "name":
                  "L'usage ou non de la virgule autour des propositions relatives",
                "difficultyLevel": 47
              },
              {
                "id": 7977,
                "name":
                  "Abréviation des nombres ordinaux : 1<SUP>er</SUP> ; 1<SUP>re</SUP> ; 2<SUP>e</SUP> ; 3<SUP>e</SUP>…",
                "difficultyLevel": 35
              },
              {
                "id": 7989,
                "name":
                  "Premier Ministre, premier Ministre ou Premier ministre ; ministre des Affaires étrangères…",
                "difficultyLevel": 33
              },
              {
                "id": 7976,
                "name":
                  "Guillemets : point avant ou après le guillemet fermant",
                "difficultyLevel": 25
              }
            ],
            "acquired": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 121
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 76
              },
              {
                "id": 4657,
                "name": "« à l'attention de » ou « à l'intention de » ?",
                "difficultyLevel": 61
              },
              {
                "id": 4665,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 60
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 56
              }
            ],
            "known": [
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 50
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 44
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4556,
                "name": "« est » ou « et » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 27
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-18",
              "sumscore": 7.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-23",
              "sumscore": 11.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-25",
              "sumscore": 14.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-02",
              "sumscore": 35.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-06",
              "sumscore": 39.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-10",
              "sumscore": 42.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-26",
              "sumscore": 47.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-31",
              "sumscore": 51.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-03",
              "sumscore": 84.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-13",
              "sumscore": 86.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-19",
              "sumscore": 89.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-20",
              "sumscore": 91.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-26",
              "sumscore": 97.64,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-31",
              "sumscore": 98.64,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-02-02",
              "sumscore": 107.34,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-02-03",
              "sumscore": 118.34,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-02-09",
              "sumscore": 125.34,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-03",
              "sumscore": 146.34,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-11",
              "sumscore": 163.34,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 4218940,
          "fullName": faker.name.findName(),
          "time": 63,
          "score": { "sum": 115, "count": 364 },
          "initialLevel": { "sum": 88, "count": 115 },
          "initialEval": 63,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 8,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4562,
                "name": "« ces » ou « ses » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4600,
                "name": "« entretien » ou « entretient » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4572,
                "name": "« la plupart est » ou « la plupart sont » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 9
              },
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 7
              }
            ],
            "known": [
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4588,
                "name": "« il se détend » ou « il se détent » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4610,
                "name": "« presque » ou « presqu' » ?",
                "difficultyLevel": 9
              }
            ]
          },
          "progData": [
            {
              "date": "2019-03-11",
              "sumscore": 14.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-13",
              "sumscore": 28.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 70.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805255,
          "fullName": faker.name.findName(),
          "time": 18,
          "score": { "sum": 87, "count": 364 },
          "initialLevel": { "sum": 46, "count": 87 },
          "initialEval": 33,
          "lastConnection": "2019-03-05",
          "connectionsNbr": 3,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4557,
                "name": "« notre » ou « nôtre » ? « votre » ou « vôtre » ?",
                "difficultyLevel": 1
              }
            ],
            "acquired": [
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 9
              },
              {
                "id": 4556,
                "name": "« est » ou « et » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4547,
                "name": "« on » ou « ont » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 1
              }
            ],
            "known": [
              {
                "id": 4535,
                "name": "« avenir » ou « à venir » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4566,
                "name": "« en fesant » ou « en faisant » ? ",
                "difficultyLevel": 10
              },
              {
                "id": 4565,
                "name": "« mieu » ou « mieux » ?",
                "difficultyLevel": 9
              },
              {
                "id": 4539,
                "name": "« ça », « çà » ou « sa » ?",
                "difficultyLevel": 8
              },
              {
                "id": 4550,
                "name":
                  "« tu mange » ou « tu manges » ? « tu mangera » ou « tu mangeras » ?",
                "difficultyLevel": 7
              }
            ]
          },
          "progData": [
            {
              "date": "2019-01-07",
              "sumscore": 14.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-05",
              "sumscore": 26.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 4218941,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 74, "count": 364 },
          "initialLevel": { "sum": 56, "count": 74 },
          "initialEval": 40,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805252,
          "fullName": faker.name.findName(),
          "time": 201,
          "score": { "sum": 113, "count": 364 },
          "initialLevel": { "sum": 55, "count": 113 },
          "initialEval": 39,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 13,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 10
              },
              {
                "id": 4656,
                "name": "« éi » ou « éï » ?",
                "difficultyLevel": 9
              },
              {
                "id": 4630,
                "name": "« inclue » ou « incluse » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4601,
                "name":
                  "« magazin » ou « magasin » ? « magasine » ou « magazine » ?",
                "difficultyLevel": 5
              }
            ],
            "acquired": [
              {
                "id": 4557,
                "name": "« notre » ou « nôtre » ? « votre » ou « vôtre » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4595,
                "name":
                  "« elle s'est fait faire » ou « elle s'est faite faire » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4610,
                "name": "« presque » ou « presqu' » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4540,
                "name": "« dans » ou « d'en » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 17
              }
            ],
            "known": [
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4598,
                "name": "« peut être » ou « peut-être » ?",
                "difficultyLevel": 28
              },
              {
                "id": 4538,
                "name": "« ou » ou « où » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4549,
                "name": "« nous nous amusont » ou « nous nous amusons » ?",
                "difficultyLevel": 19
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-19",
              "sumscore": 8.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-19",
              "sumscore": 46.88,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-04",
              "sumscore": 83.880005,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 94.880005,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 4218942,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 82, "count": 364 },
          "initialLevel": { "sum": 68, "count": 82 },
          "initialEval": 49,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805253,
          "fullName": faker.name.findName(),
          "time": 404,
          "score": { "sum": 137, "count": 364 },
          "initialLevel": { "sum": 53, "count": 137 },
          "initialEval": 38,
          "lastConnection": "2019-03-10",
          "connectionsNbr": 19,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 38
              },
              {
                "id": 4665,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4662,
                "name": "« j'ai été » ou « je suis allé » ?",
                "difficultyLevel": 31
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4729,
                "name": "« du » ou « dû » ?",
                "difficultyLevel": 21
              }
            ],
            "acquired": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 40
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 32
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 23
              }
            ],
            "known": [
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 51
              },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 51
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 29
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 21
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-20",
              "sumscore": 33.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-04",
              "sumscore": 64.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-02-04",
              "sumscore": 77.4,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-02-06",
              "sumscore": 89.340004,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-07",
              "sumscore": 124.44,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-10",
              "sumscore": 137.48,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 4218943,
          "fullName": faker.name.findName(),
          "time": 33,
          "score": { "sum": 63, "count": 364 },
          "initialLevel": { "sum": 42, "count": 63 },
          "initialEval": 30,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 3,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 10
              },
              {
                "id": 4542,
                "name": "« j'envoie » ou « j'envois » ?",
                "difficultyLevel": 7
              }
            ],
            "acquired": [
              {
                "id": 4545,
                "name": "« connection » ou « connexion » ?",
                "difficultyLevel": 16
              },
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4559,
                "name": "« cauchemar » ou « cauchemard » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4547,
                "name": "« on » ou « ont » ?",
                "difficultyLevel": 3
              }
            ],
            "known": [
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 6
              },
              {
                "id": 4535,
                "name": "« avenir » ou « à venir » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4550,
                "name":
                  "« tu mange » ou « tu manges » ? « tu mangera » ou « tu mangeras » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4534,
                "name": "« son » ou « sont » ?",
                "difficultyLevel": 3
              }
            ]
          },
          "progData": [
            {
              "date": "2019-04-01",
              "sumscore": 27.76,
              "moduleName": "Supérieur"
            }
          ]
        }
      ],
      "insights": {
        "lastWeek": {
          "time": { "sum": 3, "sumd": -20 },
          "score": { "sum": 2, "sumd": -12 },
          "activeUsers": { "sum": 7, "sumd": -31 },
          "inactiveUsers": { "sum": 83, "sumd": 31 },
          "connections": [
            { "count": 5, "date": "2019-04-02" },
            { "count": 14, "date": "2019-04-03" },
            { "count": 4, "date": "2019-04-04" },
            { "count": 4, "date": "2019-04-05" },
            { "count": 5, "date": "2019-04-06" },
            { "count": 0, "date": "2019-04-07" },
            { "count": 0, "date": "2019-04-08" }
          ],
          "topNRules": {
            "focused": [
              {
                "id": 4191,
                "name": "« cent » ou « cents » ?",
                "difficultyLevel": 80
              },
              {
                "id": 4210,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 79
              },
              {
                "id": 8975,
                "name": "« Athéna, déesse éponyme d'Athènes »",
                "difficultyLevel": 61
              },
              {
                "id": 4208,
                "name": "« des tuniques bleu foncé » ou « bleues foncées » ?",
                "difficultyLevel": 51
              },
              {
                "id": 3012,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 49
              }
            ],
            "acquired": [
              {
                "id": 4210,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 77
              },
              {
                "id": 8195,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 62
              },
              {
                "id": 3538,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 59
              },
              {
                "id": 8194,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 52
              },
              {
                "id": 3109,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 48
              }
            ],
            "known": [
              {
                "id": 3109,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 45
              },
              {
                "id": 3130,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 39
              },
              {
                "id": 3541,
                "name":
                  "« apeller » ou « appeler » ? « rapelle » ou « rappelle » ?",
                "difficultyLevel": 35
              },
              {
                "id": 3542,
                "name":
                  "« personel ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 33
              },
              {
                "id": 3127,
                "name": "« j'ai été » ou « je suis allé » ?",
                "difficultyLevel": 32
              }
            ]
          },
          "topNUsers": {
            "score": [
              { "id": 3805235, "sum": { "sum": 50, "sumd": 37 } },
              { "id": 3805294, "sum": { "sum": 34, "sumd": 34 } },
              { "id": 3805234, "sum": { "sum": 25, "sumd": 22 } },
              { "id": 4218945, "sum": { "sum": 14, "sumd": 14 } },
              { "id": 3805280, "sum": { "sum": 12, "sumd": -5 } }
            ],
            "time": [
              { "id": 3805235, "sum": { "sum": 91, "sumd": 20 } },
              { "id": 3805280, "sum": { "sum": 71, "sumd": -51 } },
              { "id": 3805294, "sum": { "sum": 45, "sumd": 45 } },
              { "id": 3805234, "sum": { "sum": 25, "sumd": 15 } },
              { "id": 4218945, "sum": { "sum": 13, "sumd": 13 } }
            ],
            "help": [
              { "id": 3805290, "sum": { "sum": 32, "sumd": 32 } },
              { "id": 3805280, "sum": { "sum": 21, "sumd": 1 } },
              { "id": 3805235, "sum": { "sum": 17, "sumd": 12 } },
              { "id": 3805234, "sum": { "sum": 16, "sumd": 0 } },
              { "id": 3805294, "sum": { "sum": 6, "sumd": 6 } }
            ],
            "dropout": [
              { "id": 3805228, "sum": { "sum": 0, "sumd": -49 } },
              { "id": 3805260, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805217, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805249, "sum": { "sum": 0, "sumd": -32 } },
              { "id": 3805281, "sum": { "sum": 0, "sumd": 0 } }
            ]
          }
        },
        "lastMonth": {
          "time": { "sum": 38, "sumd": 23 },
          "score": { "sum": 22, "sumd": 13 },
          "activeUsers": { "sum": 29, "sumd": 20 },
          "inactiveUsers": { "sum": 61, "sumd": -20 },
          "connections": [
            { "count": 8, "date": "2019-03-10" },
            { "count": 14, "date": "2019-03-11" },
            { "count": 4, "date": "2019-03-12" },
            { "count": 2, "date": "2019-03-13" },
            { "count": 5, "date": "2019-03-14" },
            { "count": 4, "date": "2019-03-15" },
            { "count": 0, "date": "2019-03-16" },
            { "count": 12, "date": "2019-03-17" },
            { "count": 6, "date": "2019-03-18" },
            { "count": 4, "date": "2019-03-19" },
            { "count": 0, "date": "2019-03-20" },
            { "count": 3, "date": "2019-03-21" },
            { "count": 8, "date": "2019-03-22" },
            { "count": 7, "date": "2019-03-23" },
            { "count": 3, "date": "2019-03-24" },
            { "count": 3, "date": "2019-03-25" },
            { "count": 5, "date": "2019-03-26" },
            { "count": 0, "date": "2019-03-27" },
            { "count": 11, "date": "2019-03-28" },
            { "count": 0, "date": "2019-03-29" },
            { "count": 10, "date": "2019-03-30" },
            { "count": 21, "date": "2019-03-31" },
            { "count": 95, "date": "2019-04-01" },
            { "count": 5, "date": "2019-04-02" },
            { "count": 14, "date": "2019-04-03" },
            { "count": 4, "date": "2019-04-04" },
            { "count": 4, "date": "2019-04-05" },
            { "count": 5, "date": "2019-04-06" },
            { "count": 0, "date": "2019-04-07" },
            { "count": 0, "date": "2019-04-08" }
          ],
          "topNRules": {
            "focused": [
              {
                "id": 4191,
                "name": "« cent » ou « cents » ?",
                "difficultyLevel": 80
              },
              {
                "id": 4210,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 79
              },
              {
                "id": 8975,
                "name": "« Athéna, déesse éponyme d'Athènes »",
                "difficultyLevel": 61
              },
              {
                "id": 4208,
                "name": "« des tuniques bleu foncé » ou « bleues foncées » ?",
                "difficultyLevel": 51
              },
              {
                "id": 3012,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 49
              }
            ],
            "acquired": [
              {
                "id": 4210,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 77
              },
              {
                "id": 8195,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 62
              },
              {
                "id": 3538,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 59
              },
              {
                "id": 8194,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 52
              },
              {
                "id": 3109,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 48
              }
            ],
            "known": [
              {
                "id": 3109,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 45
              },
              {
                "id": 3130,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 39
              },
              {
                "id": 3541,
                "name":
                  "« apeller » ou « appeler » ? « rapelle » ou « rappelle » ?",
                "difficultyLevel": 35
              },
              {
                "id": 3542,
                "name":
                  "« personel ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 33
              },
              {
                "id": 3127,
                "name": "« j'ai été » ou « je suis allé » ?",
                "difficultyLevel": 32
              }
            ]
          },
          "topNUsers": {
            "score": [
              { "id": 3805272, "sum": { "sum": 126, "sumd": 126 } },
              { "id": 3805296, "sum": { "sum": 93, "sumd": 91 } },
              { "id": 3805267, "sum": { "sum": 89, "sumd": 81 } },
              { "id": 3805278, "sum": { "sum": 82, "sumd": 82 } },
              { "id": 3805263, "sum": { "sum": 80, "sumd": 80 } }
            ],
            "time": [
              { "id": 3805280, "sum": { "sum": 304, "sumd": 78 } },
              { "id": 3805261, "sum": { "sum": 190, "sumd": 190 } },
              { "id": 3805267, "sum": { "sum": 171, "sumd": 109 } },
              { "id": 3805244, "sum": { "sum": 166, "sumd": 166 } },
              { "id": 3805235, "sum": { "sum": 162, "sumd": 162 } }
            ],
            "help": [
              { "id": 3805224, "sum": { "sum": 39, "sumd": 39 } },
              { "id": 3805290, "sum": { "sum": 32, "sumd": 32 } },
              { "id": 3805225, "sum": { "sum": 28, "sumd": 28 } },
              { "id": 3805274, "sum": { "sum": 27, "sumd": 1 } },
              { "id": 3805253, "sum": { "sum": 23, "sumd": 10 } }
            ],
            "dropout": [
              { "id": 3805260, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805292, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805217, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805281, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 4218942, "sum": { "sum": 0, "sumd": 0 } }
            ]
          }
        }
      },
      "modules": [
        {
          "key": "Pro",
          "index": 0,
          "nbrOfRules": 84,
          "routeId": 62,
          "productId": 55
        },
        {
          "key": "Pont supérieur",
          "index": 1,
          "nbrOfRules": 56,
          "routeId": 62,
          "productId": 56
        },
        {
          "key": "Orthotypographie",
          "index": 2,
          "nbrOfRules": 24,
          "routeId": 62,
          "productId": 57
        },
        {
          "key": "Excellence",
          "index": 3,
          "nbrOfRules": 200,
          "routeId": 62,
          "productId": 71
        },
        {
          "key": "Supérieur",
          "index": 0,
          "nbrOfRules": 140,
          "routeId": 68,
          "productId": 53
        },
        {
          "key": "Orthotypographie",
          "index": 2,
          "nbrOfRules": 24,
          "routeId": 68,
          "productId": 57
        },
        {
          "key": "Excellence",
          "index": 3,
          "nbrOfRules": 200,
          "routeId": 68,
          "productId": 71
        }
      ],
      "evaluations": [
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805217,
          "mark": null,
          "score": 60,
          "time": 25.3167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805218,
          "mark": null,
          "score": 16,
          "time": 32.95
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805219,
          "mark": null,
          "score": 26,
          "time": 41.3167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805220,
          "mark": null,
          "score": 12,
          "time": 55.7833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805221,
          "mark": null,
          "score": 46,
          "time": 46.8167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805222,
          "mark": null,
          "score": 43,
          "time": 43.05
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805223,
          "mark": null,
          "score": 52,
          "time": 54.8
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805224,
          "mark": null,
          "score": 21,
          "time": 55.9833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805225,
          "mark": null,
          "score": 19,
          "time": 25.15
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805226,
          "mark": null,
          "score": 64,
          "time": 39.5
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805227,
          "mark": null,
          "score": 36,
          "time": 51.2833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805228,
          "mark": null,
          "score": 40,
          "time": 47.1
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805229,
          "mark": null,
          "score": 42,
          "time": 52.75
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805230,
          "mark": null,
          "score": 29,
          "time": 54.9667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805231,
          "mark": null,
          "score": 44,
          "time": 38.2
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805232,
          "mark": null,
          "score": 30,
          "time": 48.8333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805233,
          "mark": null,
          "score": 36,
          "time": 55.85
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805234,
          "mark": null,
          "score": 21,
          "time": 55.95
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805235,
          "mark": null,
          "score": 44,
          "time": 49.9667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805236,
          "mark": null,
          "score": 38,
          "time": 42.3333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805237,
          "mark": null,
          "score": 49,
          "time": 46.1333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805238,
          "mark": null,
          "score": 19,
          "time": 36.4167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805239,
          "mark": null,
          "score": 35,
          "time": 48.7333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805240,
          "mark": null,
          "score": 45,
          "time": 43.55
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805241,
          "mark": null,
          "score": 47,
          "time": 44.5833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805242,
          "mark": null,
          "score": 24,
          "time": 46.6833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805243,
          "mark": null,
          "score": 55,
          "time": 50.0
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805244,
          "mark": null,
          "score": 56,
          "time": 34.95
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805245,
          "mark": null,
          "score": 39,
          "time": 54.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805246,
          "mark": null,
          "score": 50,
          "time": 48.1667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805247,
          "mark": null,
          "score": 26,
          "time": 27.4167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805248,
          "mark": null,
          "score": 36,
          "time": 55.9
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805249,
          "mark": null,
          "score": 44,
          "time": 49.6
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805250,
          "mark": null,
          "score": 59,
          "time": 55.2
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805252,
          "mark": null,
          "score": 39,
          "time": 55.0333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805253,
          "mark": null,
          "score": 38,
          "time": 39.6667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805254,
          "mark": null,
          "score": 34,
          "time": 44.4167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805255,
          "mark": null,
          "score": 33,
          "time": 33.3333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805256,
          "mark": null,
          "score": 39,
          "time": 22.2167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805257,
          "mark": null,
          "score": 35,
          "time": 18.2
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805258,
          "mark": null,
          "score": 34,
          "time": 37.6667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805259,
          "mark": null,
          "score": 9,
          "time": 55.95
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805260,
          "mark": null,
          "score": 52,
          "time": 31.1333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805261,
          "mark": null,
          "score": 80,
          "time": 38.7167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805262,
          "mark": null,
          "score": 21,
          "time": 18.05
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805263,
          "mark": null,
          "score": 48,
          "time": 46.1333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805264,
          "mark": null,
          "score": 17,
          "time": 36.3667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805265,
          "mark": null,
          "score": 33,
          "time": 40.1667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805266,
          "mark": null,
          "score": 39,
          "time": 55.9
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805267,
          "mark": null,
          "score": 43,
          "time": 24.3833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805268,
          "mark": null,
          "score": 57,
          "time": 28.1
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805269,
          "mark": null,
          "score": 42,
          "time": 51.9667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805270,
          "mark": null,
          "score": 36,
          "time": 49.6167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805271,
          "mark": null,
          "score": 37,
          "time": 55.8333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805272,
          "mark": null,
          "score": 72,
          "time": 36.2667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805273,
          "mark": null,
          "score": 42,
          "time": 45.85
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805274,
          "mark": null,
          "score": 34,
          "time": 42.9333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805275,
          "mark": null,
          "score": 14,
          "time": 55.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805276,
          "mark": null,
          "score": 28,
          "time": 36.5333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805277,
          "mark": null,
          "score": 29,
          "time": 34.1833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805278,
          "mark": null,
          "score": 59,
          "time": 29.5
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805279,
          "mark": null,
          "score": 51,
          "time": 54.2
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805280,
          "mark": null,
          "score": 38,
          "time": 55.9333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805281,
          "mark": null,
          "score": 28,
          "time": 33.9
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805282,
          "mark": null,
          "score": 31,
          "time": 27.35
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805283,
          "mark": null,
          "score": 21,
          "time": 55.9667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805284,
          "mark": null,
          "score": 66,
          "time": 33.2667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805285,
          "mark": null,
          "score": 47,
          "time": 25.65
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805286,
          "mark": null,
          "score": 22,
          "time": 54.25
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805287,
          "mark": null,
          "score": 56,
          "time": 42.9167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805288,
          "mark": null,
          "score": 42,
          "time": 38.3167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805289,
          "mark": null,
          "score": 41,
          "time": 46.7333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805290,
          "mark": null,
          "score": 64,
          "time": 55.05
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805291,
          "mark": null,
          "score": 21,
          "time": 53.35
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805292,
          "mark": null,
          "score": 21,
          "time": 44.2667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805293,
          "mark": null,
          "score": 16,
          "time": 33.85
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805294,
          "mark": null,
          "score": 24,
          "time": 49.7667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805295,
          "mark": null,
          "score": 55,
          "time": 53.5167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805296,
          "mark": null,
          "score": 32,
          "time": 55.8
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805297,
          "mark": null,
          "score": 27,
          "time": 40.2
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805298,
          "mark": null,
          "score": 66,
          "time": 48.0667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3890159,
          "mark": null,
          "score": 73,
          "time": 27.0
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 4218939,
          "mark": null,
          "score": 54,
          "time": 55.9167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 4218940,
          "mark": null,
          "score": 63,
          "time": 55.8667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 4218941,
          "mark": null,
          "score": 40,
          "time": 37.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 4218942,
          "mark": null,
          "score": 49,
          "time": 41.1833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 4218943,
          "mark": null,
          "score": 30,
          "time": 43.65
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 4218944,
          "mark": null,
          "score": 35,
          "time": 42.1833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 4218945,
          "mark": null,
          "score": 40,
          "time": 37.65
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805260,
          "mark": 6.0,
          "score": 59,
          "time": 44.8667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805266,
          "mark": 8.0,
          "score": 63,
          "time": 37.35
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805291,
          "mark": 3.0,
          "score": 30,
          "time": 35.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805288,
          "mark": 12.0,
          "score": 71,
          "time": 35.6833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805290,
          "mark": 10.0,
          "score": 78,
          "time": 53.8833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805279,
          "mark": 4.0,
          "score": 40,
          "time": 45.6333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805225,
          "mark": 5.0,
          "score": 30,
          "time": 28.5167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805273,
          "mark": 6.0,
          "score": 55,
          "time": 50.2667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805280,
          "mark": 11.5,
          "score": 51,
          "time": 29.4833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805292,
          "mark": 7.0,
          "score": 41,
          "time": 35.6333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805269,
          "mark": 11.0,
          "score": 66,
          "time": 43.4667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805261,
          "mark": 7.0,
          "score": 71,
          "time": 39.2
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805293,
          "mark": 4.5,
          "score": 34,
          "time": 49.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805241,
          "mark": 5.5,
          "score": 52,
          "time": 40.35
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805277,
          "mark": 3.0,
          "score": 30,
          "time": 43.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805243,
          "mark": 6.0,
          "score": 56,
          "time": 40.4333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805240,
          "mark": 14.0,
          "score": 83,
          "time": 45.9167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805245,
          "mark": 13.0,
          "score": 73,
          "time": 43.5333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805296,
          "mark": 4.5,
          "score": 41,
          "time": 49.3
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805223,
          "mark": 7.5,
          "score": 61,
          "time": 37.0167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805264,
          "mark": 14.0,
          "score": 59,
          "time": 41.8667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805233,
          "mark": 3.5,
          "score": 36,
          "time": 47.8167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805221,
          "mark": 5.5,
          "score": 54,
          "time": 47.6667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805259,
          "mark": 4.5,
          "score": 34,
          "time": 47.35
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805287,
          "mark": 9.5,
          "score": 71,
          "time": 39.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805230,
          "mark": 4.0,
          "score": 35,
          "time": 43.6167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805294,
          "mark": 3.5,
          "score": 31,
          "time": 51.6167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805227,
          "mark": 9.5,
          "score": 57,
          "time": 45.1167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805237,
          "mark": 4.5,
          "score": 47,
          "time": 44.0167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805262,
          "mark": 9.0,
          "score": 51,
          "time": 34.6167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805219,
          "mark": 4.0,
          "score": 34,
          "time": 49.1667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805268,
          "mark": 6.5,
          "score": 61,
          "time": 24.0667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805285,
          "mark": 5.5,
          "score": 51,
          "time": 23.5833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805270,
          "mark": 6.5,
          "score": 50,
          "time": 36.8333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805224,
          "mark": 4.5,
          "score": 31,
          "time": 46.9167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805284,
          "mark": 5.5,
          "score": 60,
          "time": 35.0667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805267,
          "mark": 13.5,
          "score": 76,
          "time": 30.5167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805298,
          "mark": 5.5,
          "score": 59,
          "time": 47.8
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805276,
          "mark": 2.5,
          "score": 24,
          "time": 34.7833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805295,
          "mark": 8.5,
          "score": 55,
          "time": 47.8167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805220,
          "mark": 1.5,
          "score": 15,
          "time": 23.6167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805265,
          "mark": 3.0,
          "score": 32,
          "time": 44.0833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805274,
          "mark": 11.0,
          "score": 65,
          "time": 46.4667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805278,
          "mark": 5.5,
          "score": 59,
          "time": 35.0333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805242,
          "mark": 3.0,
          "score": 30,
          "time": 40.4
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805297,
          "mark": 7.0,
          "score": 46,
          "time": 47.8667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805281,
          "mark": 7.0,
          "score": 53,
          "time": 46.8
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805282,
          "mark": 5.5,
          "score": 46,
          "time": 47.75
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805228,
          "mark": 4.5,
          "score": 41,
          "time": 39.15
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805289,
          "mark": 6.5,
          "score": 51,
          "time": 31.1333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805235,
          "mark": 3.5,
          "score": 33,
          "time": 23.6
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805239,
          "mark": 13.5,
          "score": 74,
          "time": 45.3333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805256,
          "mark": 7.0,
          "score": 54,
          "time": 34.4333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805252,
          "mark": 7.0,
          "score": 55,
          "time": 25.1667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805258,
          "mark": 2.0,
          "score": 18,
          "time": 32.7167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805257,
          "mark": 10.5,
          "score": 63,
          "time": 30.8667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805247,
          "mark": 3.0,
          "score": 30,
          "time": 20.4833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805238,
          "mark": 2.0,
          "score": 21,
          "time": 42.7833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805236,
          "mark": 5.0,
          "score": 43,
          "time": 39.9667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805234,
          "mark": 12.0,
          "score": 69,
          "time": 44.7667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805272,
          "mark": 6.5,
          "score": 69,
          "time": 29.8833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805254,
          "mark": 10.5,
          "score": 54,
          "time": 32.3167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805275,
          "mark": 9.5,
          "score": 47,
          "time": 47.6167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805263,
          "mark": 5.0,
          "score": 51,
          "time": 35.4833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805253,
          "mark": 5.5,
          "score": 41,
          "time": 38.8833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805286,
          "mark": 5.0,
          "score": 30,
          "time": 53.45
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805255,
          "mark": 4.0,
          "score": 38,
          "time": 42.7167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805246,
          "mark": 9.0,
          "score": 63,
          "time": 34.3333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805226,
          "mark": 6.5,
          "score": 62,
          "time": 40.3667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805271,
          "mark": 7.5,
          "score": 57,
          "time": 51.5167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805218,
          "mark": 3.0,
          "score": 26,
          "time": 34.3667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805250,
          "mark": 11.5,
          "score": 81,
          "time": 34.0
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805244,
          "mark": 8.5,
          "score": 40,
          "time": 54.4833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805249,
          "mark": 11.5,
          "score": 74,
          "time": 43.4667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805229,
          "mark": 10.5,
          "score": 71,
          "time": 44.6833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805283,
          "mark": 13.5,
          "score": 84,
          "time": 38.4
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation janvier W2",
          "id": 3805222,
          "mark": 11.0,
          "score": 69,
          "time": 38.1833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation janvier W2",
          "id": 3805248,
          "mark": 8.0,
          "score": 64,
          "time": 55.4667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation janvier W2",
          "id": 3805217,
          "mark": 14.0,
          "score": 93,
          "time": 36.0
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805260,
          "mark": 10.0,
          "score": 74,
          "time": 49.2167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805266,
          "mark": 9.0,
          "score": 64,
          "time": 39.55
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805291,
          "mark": 2.5,
          "score": 21,
          "time": 27.7667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805288,
          "mark": 12.0,
          "score": 71,
          "time": 46.3
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805290,
          "mark": 8.5,
          "score": 71,
          "time": 38.6333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805279,
          "mark": 4.0,
          "score": 33,
          "time": 41.8167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805225,
          "mark": 5.0,
          "score": 28,
          "time": 33.15
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805280,
          "mark": 13.0,
          "score": 61,
          "time": 38.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805292,
          "mark": 5.5,
          "score": 31,
          "time": 39.9667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805269,
          "mark": 7.0,
          "score": 46,
          "time": 46.8667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805261,
          "mark": 7.5,
          "score": 74,
          "time": 37.4167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805293,
          "mark": 3.5,
          "score": 24,
          "time": 38.3333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805241,
          "mark": 5.0,
          "score": 49,
          "time": 55.8833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805277,
          "mark": 3.0,
          "score": 24,
          "time": 24.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805240,
          "mark": 3.5,
          "score": 1,
          "time": 5.8833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3890159,
          "mark": 7.0,
          "score": 72,
          "time": 20.0167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805245,
          "mark": 10.0,
          "score": 58,
          "time": 44.1167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805296,
          "mark": 5.0,
          "score": 40,
          "time": 38.8333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805223,
          "mark": 6.0,
          "score": 44,
          "time": 28.0167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805233,
          "mark": 2.0,
          "score": 9,
          "time": 3.3667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805287,
          "mark": 8.0,
          "score": 64,
          "time": 35.4
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805230,
          "mark": 7.5,
          "score": 53,
          "time": 53.5167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805227,
          "mark": 10.0,
          "score": 59,
          "time": 51.4167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805237,
          "mark": 4.5,
          "score": 46,
          "time": 42.65
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805262,
          "mark": 9.0,
          "score": 41,
          "time": 25.8
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805219,
          "mark": 4.5,
          "score": 37,
          "time": 40.1333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805267,
          "mark": 5.0,
          "score": 0,
          "time": 2.2833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805295,
          "mark": 11.0,
          "score": 64,
          "time": 42.65
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805274,
          "mark": 10.0,
          "score": 59,
          "time": 42.7667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805278,
          "mark": 6.5,
          "score": 62,
          "time": 29.3333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805242,
          "mark": 2.0,
          "score": 11,
          "time": 10.9167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805297,
          "mark": 6.5,
          "score": 43,
          "time": 51.8833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805248,
          "mark": 4.0,
          "score": 36,
          "time": 45.9167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805281,
          "mark": 8.5,
          "score": 59,
          "time": 40.6833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805282,
          "mark": 5.0,
          "score": 41,
          "time": 25.4
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805289,
          "mark": 9.0,
          "score": 64,
          "time": 37.5333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805239,
          "mark": 12.0,
          "score": 67,
          "time": 46.1333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805256,
          "mark": 4.5,
          "score": 39,
          "time": 16.7167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805252,
          "mark": 5.5,
          "score": 44,
          "time": 27.1
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805257,
          "mark": 10.0,
          "score": 58,
          "time": 20.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805236,
          "mark": 5.0,
          "score": 44,
          "time": 41.6
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805234,
          "mark": 12.0,
          "score": 63,
          "time": 36.25
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805272,
          "mark": 7.0,
          "score": 71,
          "time": 30.95
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805254,
          "mark": 13.0,
          "score": 61,
          "time": 23.5167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805275,
          "mark": 7.0,
          "score": 23,
          "time": 55.7667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805253,
          "mark": 6.0,
          "score": 43,
          "time": 36.7167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805286,
          "mark": 5.0,
          "score": 31,
          "time": 55.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805246,
          "mark": 9.5,
          "score": 58,
          "time": 47.65
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805249,
          "mark": 10.5,
          "score": 68,
          "time": 47.6
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805229,
          "mark": 5.0,
          "score": 38,
          "time": 46.5833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805283,
          "mark": 4.0,
          "score": 1,
          "time": 5.85
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février V2",
          "id": 3805283,
          "mark": 13.5,
          "score": 76,
          "time": 38.8833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février V3",
          "id": 3805243,
          "mark": 7.5,
          "score": 63,
          "time": 37.4167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805260,
          "mark": 8.5,
          "score": 66,
          "time": 42.25
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 4218943,
          "mark": 3.0,
          "score": 31,
          "time": 48.1167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805266,
          "mark": 9.0,
          "score": 64,
          "time": 31.55
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805288,
          "mark": 14.5,
          "score": 75,
          "time": 43.7667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805290,
          "mark": 8.0,
          "score": 70,
          "time": 48.15
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805279,
          "mark": 5.0,
          "score": 48,
          "time": 44.9333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805225,
          "mark": 6.5,
          "score": 33,
          "time": 28.2667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805273,
          "mark": 5.5,
          "score": 49,
          "time": 34.4167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805280,
          "mark": 12.5,
          "score": 57,
          "time": 41.0333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805292,
          "mark": 7.0,
          "score": 38,
          "time": 36.9
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805269,
          "mark": 9.0,
          "score": 51,
          "time": 35.1
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805261,
          "mark": 11.5,
          "score": 87,
          "time": 35.7333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805293,
          "mark": 5.0,
          "score": 34,
          "time": 51.65
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805241,
          "mark": 6.5,
          "score": 56,
          "time": 54.7
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805277,
          "mark": 3.0,
          "score": 24,
          "time": 26.2333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805243,
          "mark": 8.5,
          "score": 67,
          "time": 41.6333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 4218941,
          "mark": 4.0,
          "score": 41,
          "time": 46.35
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805240,
          "mark": 13.5,
          "score": 81,
          "time": 40.1667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805245,
          "mark": 11.0,
          "score": 61,
          "time": 34.35
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805296,
          "mark": 8.5,
          "score": 58,
          "time": 40.9667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805223,
          "mark": 8.0,
          "score": 57,
          "time": 32.3333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805264,
          "mark": 15.0,
          "score": 66,
          "time": 46.8833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 4218939,
          "mark": 9.0,
          "score": 69,
          "time": 46.2
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805233,
          "mark": 4.5,
          "score": 39,
          "time": 45.7
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805221,
          "mark": 5.0,
          "score": 48,
          "time": 34.2667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805259,
          "mark": 4.5,
          "score": 32,
          "time": 40.6
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805287,
          "mark": 10.5,
          "score": 74,
          "time": 34.2333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 4218942,
          "mark": 4.0,
          "score": 41,
          "time": 36.1667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805230,
          "mark": 3.5,
          "score": 29,
          "time": 54.8
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805227,
          "mark": 10.0,
          "score": 55,
          "time": 45.2167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805237,
          "mark": 7.0,
          "score": 58,
          "time": 46.4333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805262,
          "mark": 12.5,
          "score": 51,
          "time": 24.2
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805219,
          "mark": 5.0,
          "score": 39,
          "time": 43.35
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 4218940,
          "mark": 7.0,
          "score": 67,
          "time": 45.6167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805268,
          "mark": 5.0,
          "score": 46,
          "time": 26.9667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805270,
          "mark": 11.0,
          "score": 58,
          "time": 47.7833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805224,
          "mark": 8.0,
          "score": 55,
          "time": 42.1333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805284,
          "mark": 6.0,
          "score": 61,
          "time": 24.9167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805267,
          "mark": 15.5,
          "score": 76,
          "time": 26.8
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 4218944,
          "mark": 3.0,
          "score": 29,
          "time": 35.8833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805298,
          "mark": 6.0,
          "score": 64,
          "time": 46.3833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805276,
          "mark": 2.5,
          "score": 22,
          "time": 46.4833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805295,
          "mark": 10.5,
          "score": 60,
          "time": 45.4667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805220,
          "mark": 3.5,
          "score": 26,
          "time": 49.45
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805274,
          "mark": 10.5,
          "score": 58,
          "time": 41.9833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805278,
          "mark": 10.0,
          "score": 76,
          "time": 31.35
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805242,
          "mark": 3.5,
          "score": 29,
          "time": 44.4833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805297,
          "mark": 6.0,
          "score": 37,
          "time": 38.7
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805281,
          "mark": 8.0,
          "score": 54,
          "time": 33.4667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805282,
          "mark": 4.5,
          "score": 36,
          "time": 28.75
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805228,
          "mark": 9.0,
          "score": 64,
          "time": 54.3667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805289,
          "mark": 7.5,
          "score": 54,
          "time": 33.0333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805235,
          "mark": 4.0,
          "score": 39,
          "time": 18.1833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805239,
          "mark": 11.0,
          "score": 60,
          "time": 50.1333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805256,
          "mark": 7.0,
          "score": 51,
          "time": 23.0
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805252,
          "mark": 8.0,
          "score": 58,
          "time": 26.4333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805258,
          "mark": 8.0,
          "score": 62,
          "time": 39.5167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805257,
          "mark": 12.5,
          "score": 68,
          "time": 26.7333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805247,
          "mark": 3.5,
          "score": 30,
          "time": 36.0667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805238,
          "mark": 3.0,
          "score": 26,
          "time": 40.9333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805236,
          "mark": 6.0,
          "score": 46,
          "time": 37.4667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805234,
          "mark": 12.0,
          "score": 59,
          "time": 37.6333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805272,
          "mark": 13.5,
          "score": 93,
          "time": 24.3
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805254,
          "mark": 15.0,
          "score": 69,
          "time": 46.05
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805275,
          "mark": 13.0,
          "score": 57,
          "time": 51.2833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805253,
          "mark": 10.0,
          "score": 57,
          "time": 33.3167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805286,
          "mark": 8.5,
          "score": 47,
          "time": 51.4
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805255,
          "mark": 4.5,
          "score": 39,
          "time": 44.9
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805246,
          "mark": 11.5,
          "score": 67,
          "time": 41.5167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805226,
          "mark": 5.5,
          "score": 44,
          "time": 36.4
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805271,
          "mark": 9.0,
          "score": 64,
          "time": 49.7
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805218,
          "mark": 2.0,
          "score": 14,
          "time": 34.95
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 4218945,
          "mark": 4.5,
          "score": 45,
          "time": 40.6167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805250,
          "mark": 14.0,
          "score": 89,
          "time": 44.85
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805244,
          "mark": 9.5,
          "score": 39,
          "time": 54.95
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805249,
          "mark": 11.0,
          "score": 70,
          "time": 43.3833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805229,
          "mark": 9.0,
          "score": 62,
          "time": 49.9167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805283,
          "mark": 15.5,
          "score": 77,
          "time": 28.8667
        }
      ]
    },
    {
      "id": 82123,
      "users": [
        {
          "id": 3805231,
          "fullName": faker.name.findName(),
          "time": 1024,
          "score": { "sum": 310, "count": 364 },
          "initialLevel": { "sum": 126, "count": 310 },
          "initialEval": 44,
          "lastConnection": "2019-01-15",
          "connectionsNbr": 48,
          "lastModule": "Excellence",
          "topNRules": {
            "focused": [
              {
                "id": 8921,
                "name": "« quelque… que » ou « quelques… que » ?",
                "difficultyLevel": 47
              },
              {
                "id": 7978,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 35
              },
              {
                "id": 8952,
                "name": "accord après « le peu de »",
                "difficultyLevel": 35
              },
              {
                "id": 8908,
                "name": "« feu » ou « feue » ?",
                "difficultyLevel": 32
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 30
              }
            ],
            "acquired": [
              {
                "id": 8900,
                "name": "« gril » ou « grill » ?",
                "difficultyLevel": 44
              },
              {
                "id": 8918,
                "name":
                  "« parler pour ne rien dire » mais « causer littérature »",
                "difficultyLevel": 33
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 30
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 27
              }
            ],
            "known": [
              {
                "id": 4641,
                "name": "« des nuages blanc » ou « des nuages blancs » ?",
                "difficultyLevel": 36
              },
              {
                "id": 4624,
                "name":
                  "« on a, on en, on y » ou « on n'a, on n'en, on n'y » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 24
              },
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4547,
                "name": "« on » ou « ont » ?",
                "difficultyLevel": 17
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-15",
              "sumscore": 25.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-16",
              "sumscore": 45.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-17",
              "sumscore": 49.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-18",
              "sumscore": 74.76,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-19",
              "sumscore": 104.4,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-20",
              "sumscore": 131.4,
              "moduleName": "Excellence"
            },
            {
              "date": "2018-10-21",
              "sumscore": 172.56,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-22",
              "sumscore": 193.2,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2018-10-23",
              "sumscore": 210.2,
              "moduleName": "Excellence"
            },
            {
              "date": "2018-10-31",
              "sumscore": 258.24,
              "moduleName": "Excellence"
            },
            {
              "date": "2018-11-01",
              "sumscore": 288.4,
              "moduleName": "Excellence"
            },
            {
              "date": "2018-11-09",
              "sumscore": 302.96,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-01-15",
              "sumscore": 310.36,
              "moduleName": "Excellence"
            }
          ]
        },
        {
          "id": 3805251,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 0, "count": 224 },
          "initialLevel": { "sum": 0, "count": 0 },
          "initialEval": null,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805232,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 42, "count": 364 },
          "initialLevel": { "sum": 42, "count": 42 },
          "initialEval": 30,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805248,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 109, "count": 364 },
          "initialLevel": { "sum": 51, "count": 109 },
          "initialEval": 36,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805217,
          "fullName": faker.name.findName(),
          "time": 163,
          "score": { "sum": 140, "count": 364 },
          "initialLevel": { "sum": 84, "count": 140 },
          "initialEval": 60,
          "lastConnection": "2018-10-23",
          "connectionsNbr": 18,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4657,
                "name": "« à l'attention de » ou « à l'intention de » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 24
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4663,
                "name": "« tout énervée » ou « toute énervée » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 21
              }
            ],
            "known": [
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4582,
                "name": "« c'est » ou « s'est » ? « ce sont » ou « se sont » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4572,
                "name": "« la plupart est » ou « la plupart sont » ?",
                "difficultyLevel": 16
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 16
              },
              {
                "id": 3218,
                "name":
                  "« personel » ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 15
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-18",
              "sumscore": 67.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-20",
              "sumscore": 120.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-23",
              "sumscore": 140.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805222,
          "fullName": faker.name.findName(),
          "time": 302,
          "score": { "sum": 140, "count": 364 },
          "initialLevel": { "sum": 60, "count": 140 },
          "initialEval": 43,
          "lastConnection": "2018-11-28",
          "connectionsNbr": 22,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 62
              },
              {
                "id": 4624,
                "name":
                  "« on a, on en, on y » ou « on n'a, on n'en, on n'y » ?",
                "difficultyLevel": 56
              },
              {
                "id": 4665,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 46
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 42
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 40
              }
            ],
            "known": [
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 53
              },
              {
                "id": 4638,
                "name": "« -ions » ou « -iions » ? « -iez » ou « -iiez » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4654,
                "name": "« à l'instar de » ",
                "difficultyLevel": 24
              },
              {
                "id": 4620,
                "name": "« fond » ou « fonds » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 20
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-19",
              "sumscore": 12.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-20",
              "sumscore": 21.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-22",
              "sumscore": 31.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-24",
              "sumscore": 35.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-25",
              "sumscore": 45.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-27",
              "sumscore": 61.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-28",
              "sumscore": 66.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-29",
              "sumscore": 73.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-01",
              "sumscore": 98.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-02",
              "sumscore": 99.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-18",
              "sumscore": 100.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-26",
              "sumscore": 105.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-28",
              "sumscore": 140.0,
              "moduleName": "Supérieur"
            }
          ]
        }
      ],
      "insights": {
        "lastWeek": {
          "time": { "sum": 0, "sumd": 0 },
          "score": { "sum": 0, "sumd": 0 },
          "activeUsers": { "sum": 0, "sumd": 0 },
          "inactiveUsers": { "sum": 6, "sumd": 0 },
          "connections": [
            { "count": 0, "date": "2019-04-02" },
            { "count": 0, "date": "2019-04-03" },
            { "count": 0, "date": "2019-04-04" },
            { "count": 0, "date": "2019-04-05" },
            { "count": 0, "date": "2019-04-06" },
            { "count": 0, "date": "2019-04-07" },
            { "count": 0, "date": "2019-04-08" }
          ],
          "topNRules": {
            "focused": [
              {
                "id": 8921,
                "name": "« quelque… que » ou « quelques… que » ?",
                "difficultyLevel": 47
              },
              {
                "id": 8195,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 35
              },
              {
                "id": 8952,
                "name": "accord après « le peu de »",
                "difficultyLevel": 35
              },
              {
                "id": 8908,
                "name": "« feu » ou « feue » ?",
                "difficultyLevel": 32
              },
              {
                "id": 3014,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 30
              }
            ],
            "acquired": [
              {
                "id": 3086,
                "name":
                  "« on a, on en, on y » ou « on n'a, on n'en, on n'y » ?",
                "difficultyLevel": 56
              },
              {
                "id": 8900,
                "name": "« gril » ou « grill » ?",
                "difficultyLevel": 44
              },
              {
                "id": 3109,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 43
              },
              {
                "id": 3012,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 35
              },
              {
                "id": 8918,
                "name":
                  "« parler pour ne rien dire » mais « causer littérature »",
                "difficultyLevel": 33
              }
            ],
            "known": [
              {
                "id": 3062,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 29
              },
              {
                "id": 3069,
                "name": "« fond » ou « fonds » ?",
                "difficultyLevel": 23
              },
              {
                "id": 3102,
                "name": "« -ions » ou « -iions » ? « -iez » ou « -iiez » ?",
                "difficultyLevel": 22
              },
              {
                "id": 3035,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 20
              },
              {
                "id": 3106,
                "name": "« des nuages blanc » ou « des nuages blancs » ?",
                "difficultyLevel": 20
              }
            ]
          },
          "topNUsers": {
            "score": [],
            "time": [
              { "id": 3805231, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805232, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805248, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805217, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805222, "sum": { "sum": 0, "sumd": 0 } }
            ],
            "help": [],
            "dropout": [
              { "id": 3805231, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805232, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805248, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805217, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805222, "sum": { "sum": 0, "sumd": 0 } }
            ]
          }
        },
        "lastMonth": {
          "time": { "sum": 0, "sumd": 0 },
          "score": { "sum": 0, "sumd": 0 },
          "activeUsers": { "sum": 0, "sumd": 0 },
          "inactiveUsers": { "sum": 6, "sumd": 0 },
          "connections": [
            { "count": 0, "date": "2019-03-10" },
            { "count": 0, "date": "2019-03-11" },
            { "count": 0, "date": "2019-03-12" },
            { "count": 0, "date": "2019-03-13" },
            { "count": 0, "date": "2019-03-14" },
            { "count": 0, "date": "2019-03-15" },
            { "count": 0, "date": "2019-03-16" },
            { "count": 0, "date": "2019-03-17" },
            { "count": 0, "date": "2019-03-18" },
            { "count": 0, "date": "2019-03-19" },
            { "count": 0, "date": "2019-03-20" },
            { "count": 0, "date": "2019-03-21" },
            { "count": 0, "date": "2019-03-22" },
            { "count": 0, "date": "2019-03-23" },
            { "count": 0, "date": "2019-03-24" },
            { "count": 0, "date": "2019-03-25" },
            { "count": 0, "date": "2019-03-26" },
            { "count": 0, "date": "2019-03-27" },
            { "count": 0, "date": "2019-03-28" },
            { "count": 0, "date": "2019-03-29" },
            { "count": 0, "date": "2019-03-30" },
            { "count": 0, "date": "2019-03-31" },
            { "count": 0, "date": "2019-04-01" },
            { "count": 0, "date": "2019-04-02" },
            { "count": 0, "date": "2019-04-03" },
            { "count": 0, "date": "2019-04-04" },
            { "count": 0, "date": "2019-04-05" },
            { "count": 0, "date": "2019-04-06" },
            { "count": 0, "date": "2019-04-07" },
            { "count": 0, "date": "2019-04-08" }
          ],
          "topNRules": {
            "focused": [
              {
                "id": 8921,
                "name": "« quelque… que » ou « quelques… que » ?",
                "difficultyLevel": 47
              },
              {
                "id": 8195,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 35
              },
              {
                "id": 8952,
                "name": "accord après « le peu de »",
                "difficultyLevel": 35
              },
              {
                "id": 8908,
                "name": "« feu » ou « feue » ?",
                "difficultyLevel": 32
              },
              {
                "id": 3014,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 30
              }
            ],
            "acquired": [
              {
                "id": 3086,
                "name":
                  "« on a, on en, on y » ou « on n'a, on n'en, on n'y » ?",
                "difficultyLevel": 56
              },
              {
                "id": 8900,
                "name": "« gril » ou « grill » ?",
                "difficultyLevel": 44
              },
              {
                "id": 3109,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 43
              },
              {
                "id": 3012,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 35
              },
              {
                "id": 8918,
                "name":
                  "« parler pour ne rien dire » mais « causer littérature »",
                "difficultyLevel": 33
              }
            ],
            "known": [
              {
                "id": 3062,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 29
              },
              {
                "id": 3069,
                "name": "« fond » ou « fonds » ?",
                "difficultyLevel": 23
              },
              {
                "id": 3102,
                "name": "« -ions » ou « -iions » ? « -iez » ou « -iiez » ?",
                "difficultyLevel": 22
              },
              {
                "id": 3035,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 20
              },
              {
                "id": 3106,
                "name": "« des nuages blanc » ou « des nuages blancs » ?",
                "difficultyLevel": 20
              }
            ]
          },
          "topNUsers": {
            "score": [],
            "time": [
              { "id": 3805231, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805232, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805248, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805217, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805222, "sum": { "sum": 0, "sumd": 0 } }
            ],
            "help": [],
            "dropout": [
              { "id": 3805231, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805232, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805248, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805217, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805222, "sum": { "sum": 0, "sumd": 0 } }
            ]
          }
        }
      },
      "modules": [
        {
          "key": "Pro",
          "index": 0,
          "nbrOfRules": 84,
          "routeId": 62,
          "productId": 55
        },
        {
          "key": "Pont supérieur",
          "index": 1,
          "nbrOfRules": 56,
          "routeId": 62,
          "productId": 56
        },
        {
          "key": "Orthotypographie",
          "index": 2,
          "nbrOfRules": 24,
          "routeId": 62,
          "productId": 57
        },
        {
          "key": "Excellence",
          "index": 3,
          "nbrOfRules": 200,
          "routeId": 62,
          "productId": 71
        },
        {
          "key": "Supérieur",
          "index": 0,
          "nbrOfRules": 140,
          "routeId": 68,
          "productId": 53
        },
        {
          "key": "Orthotypographie",
          "index": 2,
          "nbrOfRules": 24,
          "routeId": 68,
          "productId": 57
        },
        {
          "key": "Excellence",
          "index": 3,
          "nbrOfRules": 200,
          "routeId": 68,
          "productId": 71
        }
      ],
      "evaluations": [
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805217,
          "mark": null,
          "score": 60,
          "time": 25.3167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation janvier W2",
          "id": 3805217,
          "mark": 14.0,
          "score": 93,
          "time": 36.0
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805222,
          "mark": null,
          "score": 43,
          "time": 43.05
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation janvier W2",
          "id": 3805222,
          "mark": 11.0,
          "score": 69,
          "time": 38.1833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805231,
          "mark": null,
          "score": 44,
          "time": 38.2
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805232,
          "mark": null,
          "score": 30,
          "time": 48.8333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805248,
          "mark": null,
          "score": 36,
          "time": 55.9
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation janvier W2",
          "id": 3805248,
          "mark": 8.0,
          "score": 64,
          "time": 55.4667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805248,
          "mark": 4.0,
          "score": 36,
          "time": 45.9167
        }
      ]
    },
    {
      "id": 82124,
      "users": [
        {
          "id": 4218945,
          "fullName": faker.name.findName(),
          "time": 13,
          "score": { "sum": 83, "count": 364 },
          "initialLevel": { "sum": 56, "count": 83 },
          "initialEval": 40,
          "lastConnection": "2019-04-04",
          "connectionsNbr": 1,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4545,
                "name": "« connection » ou « connexion » ?",
                "difficultyLevel": 7
              }
            ],
            "acquired": [
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4552,
                "name": "« je peux » ou « je peut » ? ",
                "difficultyLevel": 3
              }
            ],
            "known": [
              {
                "id": 4535,
                "name": "« avenir » ou « à venir » ?",
                "difficultyLevel": 6
              },
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4539,
                "name": "« ça », « çà » ou « sa » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4540,
                "name": "« dans » ou « d'en » ?",
                "difficultyLevel": 3
              }
            ]
          },
          "progData": [
            {
              "date": "2019-04-04",
              "sumscore": 13.88,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805246,
          "fullName": faker.name.findName(),
          "time": 487,
          "score": { "sum": 177, "count": 364 },
          "initialLevel": { "sum": 85, "count": 177 },
          "initialEval": 50,
          "lastConnection": "2019-04-02",
          "connectionsNbr": 34,
          "lastModule": "Excellence",
          "topNRules": {
            "focused": [
              {
                "id": 7976,
                "name":
                  "Guillemets : point avant ou après le guillemet fermant",
                "difficultyLevel": 49
              },
              {
                "id": 7986,
                "name": "Ponctuation et espaces",
                "difficultyLevel": 48
              },
              {
                "id": 7993,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 29
              },
              {
                "id": 8818,
                "name": "« fatigant » ou « fatiguant » ?",
                "difficultyLevel": 27
              },
              {
                "id": 7972,
                "name": "Majuscule ou minuscule après le deux-points",
                "difficultyLevel": 26
              }
            ],
            "acquired": [
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 51
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 49
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4653,
                "name": "« bimensuel » ou « bimestriel » ?",
                "difficultyLevel": 33
              }
            ],
            "known": [
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 44
              },
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 40
              },
              {
                "id": 4569,
                "name": "« tous les » ou « tout les » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4572,
                "name": "« la plupart est » ou « la plupart sont » ?",
                "difficultyLevel": 16
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-18",
              "sumscore": 8.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-05",
              "sumscore": 15.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-12",
              "sumscore": 24.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-18",
              "sumscore": 33.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-29",
              "sumscore": 56.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-06",
              "sumscore": 62.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-08",
              "sumscore": 74.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-24",
              "sumscore": 75.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-25",
              "sumscore": 83.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-27",
              "sumscore": 85.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-06",
              "sumscore": 96.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-19",
              "sumscore": 128.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-22",
              "sumscore": 134.88,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-23",
              "sumscore": 139.52,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-31",
              "sumscore": 145.22,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-04-01",
              "sumscore": 162.74,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-02",
              "sumscore": 177.42,
              "moduleName": "Excellence"
            }
          ]
        },
        {
          "id": 3805247,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 73, "count": 364 },
          "initialLevel": { "sum": 36, "count": 73 },
          "initialEval": 26,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805244,
          "fullName": faker.name.findName(),
          "time": 782,
          "score": { "sum": 139, "count": 364 },
          "initialLevel": { "sum": 79, "count": 139 },
          "initialEval": 56,
          "lastConnection": "2019-03-30",
          "connectionsNbr": 24,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 65
              },
              {
                "id": 3218,
                "name":
                  "« personel » ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 45
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 41
              },
              {
                "id": 4665,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 40
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 36
              }
            ],
            "acquired": [
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 45
              },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 39
              },
              {
                "id": 4729,
                "name": "« du » ou « dû » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4664,
                "name": "« je vous saurais gré » ou « je vous serais gré » ?",
                "difficultyLevel": 36
              },
              {
                "id": 4613,
                "name": "« ci-joint » ou « ci-jointe » ?",
                "difficultyLevel": 33
              }
            ],
            "known": [
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 55
              },
              {
                "id": 4663,
                "name": "« tout énervée » ou « toute énervée » ?",
                "difficultyLevel": 55
              },
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4586,
                "name": "« voie » ou « voix » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 31
              }
            ]
          },
          "progData": [
            {
              "date": "2018-12-01",
              "sumscore": 11.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-08",
              "sumscore": 19.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-09",
              "sumscore": 29.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-15",
              "sumscore": 97.52,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-16",
              "sumscore": 107.52,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-26",
              "sumscore": 108.52,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-30",
              "sumscore": 139.09999,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805234,
          "fullName": faker.name.findName(),
          "time": 498,
          "score": { "sum": 178, "count": 364 },
          "initialLevel": { "sum": 41, "count": 178 },
          "initialEval": 21,
          "lastConnection": "2019-04-06",
          "connectionsNbr": 53,
          "lastModule": "Excellence",
          "topNRules": {
            "focused": [
              {
                "id": 8823,
                "name": "« il vaut mieux » ou « il faut mieux » ?",
                "difficultyLevel": 22
              },
              {
                "id": 8817,
                "name": "« convaincant » ou « convainquant » ?",
                "difficultyLevel": 14
              },
              {
                "id": 8822,
                "name": "« cote » ou « côte » ?",
                "difficultyLevel": 12
              },
              { "id": 8820, "name": "« répercussion »", "difficultyLevel": 10 },
              {
                "id": 8814,
                "name": "« enclin », « encline »",
                "difficultyLevel": 8
              }
            ],
            "acquired": [
              {
                "id": 7978,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 86
              },
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 65
              },
              {
                "id": 7993,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 54
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 45
              },
              {
                "id": 4738,
                "name": "« cent » ou « cents » ?",
                "difficultyLevel": 43
              }
            ],
            "known": [
              { "id": 4589, "name": "« c » ou « ç » ?", "difficultyLevel": 24 },
              {
                "id": 4547,
                "name": "« on » ou « ont » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4654,
                "name": "« à l'instar de » ",
                "difficultyLevel": 14
              },
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 13
              }
            ]
          },
          "progData": [
            { "date": "2018-10-29", "sumscore": 14.0, "moduleName": "Pro" },
            { "date": "2018-11-16", "sumscore": 25.0, "moduleName": "Pro" },
            { "date": "2018-11-18", "sumscore": 33.0, "moduleName": "Pro" },
            { "date": "2018-11-19", "sumscore": 42.0, "moduleName": "Pro" },
            { "date": "2018-11-27", "sumscore": 54.0, "moduleName": "Pro" },
            { "date": "2018-11-29", "sumscore": 58.0, "moduleName": "Pro" },
            { "date": "2018-12-06", "sumscore": 67.0, "moduleName": "Pro" },
            { "date": "2018-12-26", "sumscore": 76.0, "moduleName": "Pro" },
            { "date": "2018-12-27", "sumscore": 94.0, "moduleName": "Pro" },
            {
              "date": "2018-12-28",
              "sumscore": 110.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-01-05",
              "sumscore": 120.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-01-08",
              "sumscore": 121.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-01-24",
              "sumscore": 125.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-02-02",
              "sumscore": 140.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-02-21",
              "sumscore": 147.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-03-10",
              "sumscore": 151.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-03-31",
              "sumscore": 154.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-04-06",
              "sumscore": 178.68,
              "moduleName": "Excellence"
            }
          ]
        },
        {
          "id": 3805238,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 64, "count": 364 },
          "initialLevel": { "sum": 27, "count": 64 },
          "initialEval": 19,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805239,
          "fullName": faker.name.findName(),
          "time": 430,
          "score": { "sum": 144, "count": 364 },
          "initialLevel": { "sum": 53, "count": 144 },
          "initialEval": 35,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 27,
          "lastModule": "Orthotypographie",
          "topNRules": {
            "focused": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 23
              },
              {
                "id": 4662,
                "name": "« j'ai été » ou « je suis allé » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4665,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4659,
                "name": "« lorsque » ou « lorsqu' »",
                "difficultyLevel": 10
              }
            ],
            "acquired": [
              {
                "id": 4624,
                "name":
                  "« on a, on en, on y » ou « on n'a, on n'en, on n'y » ?",
                "difficultyLevel": 47
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 24
              },
              {
                "id": 4640,
                "name": "« parti » ou « partie » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4553,
                "name": "« il travail » ou « il travaille » ?",
                "difficultyLevel": 20
              }
            ],
            "known": [
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 28
              },
              {
                "id": 4541,
                "name": "« vous parler » ou « vous parlez » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4550,
                "name":
                  "« tu mange » ou « tu manges » ? « tu mangera » ou « tu mangeras » ?",
                "difficultyLevel": 15
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-17",
              "sumscore": 18.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-19",
              "sumscore": 27.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-25",
              "sumscore": 32.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-29",
              "sumscore": 56.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-26",
              "sumscore": 66.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-27",
              "sumscore": 68.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-28",
              "sumscore": 81.88,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-03",
              "sumscore": 91.88,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-04",
              "sumscore": 111.82,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-05",
              "sumscore": 139.1,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-17",
              "sumscore": 144.86,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-04-01",
              "sumscore": 144.86,
              "moduleName": "Orthotypographie"
            }
          ]
        },
        {
          "id": 3805236,
          "fullName": faker.name.findName(),
          "time": 111,
          "score": { "sum": 112, "count": 364 },
          "initialLevel": { "sum": 53, "count": 112 },
          "initialEval": 38,
          "lastConnection": "2019-03-31",
          "connectionsNbr": 9,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4541,
                "name": "« vous parler » ou « vous parlez » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4595,
                "name":
                  "« elle s'est fait faire » ou « elle s'est faite faire » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 8
              }
            ],
            "acquired": [
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4598,
                "name": "« peut être » ou « peut-être » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4565,
                "name": "« mieu » ou « mieux » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4577,
                "name": "« un envoie » ou « un envoi » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 12
              }
            ],
            "known": [
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4735,
                "name":
                  "« dévelopement », « dévellopement », ou « développement » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 13
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-22",
              "sumscore": 18.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-26",
              "sumscore": 32.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-06",
              "sumscore": 43.88,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-31",
              "sumscore": 69.64,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805226,
          "fullName": faker.name.findName(),
          "time": 221,
          "score": { "sum": 129, "count": 364 },
          "initialLevel": { "sum": 89, "count": 129 },
          "initialEval": 64,
          "lastConnection": "2019-01-06",
          "connectionsNbr": 11,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4729,
                "name": "« du » ou « dû » ?",
                "difficultyLevel": 6
              },
              {
                "id": 4615,
                "name": "« va » ou « vas » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4613,
                "name": "« ci-joint » ou « ci-jointe » ?",
                "difficultyLevel": 4
              }
            ],
            "acquired": [
              {
                "id": 4641,
                "name": "« des nuages blanc » ou « des nuages blancs » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4735,
                "name":
                  "« dévelopement », « dévellopement », ou « développement » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4609,
                "name": "« voir » ou « voire » ?",
                "difficultyLevel": 15
              }
            ],
            "known": [
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 45
              },
              {
                "id": 4562,
                "name": "« ces » ou « ses » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4600,
                "name": "« entretien » ou « entretient » ?",
                "difficultyLevel": 17
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-29",
              "sumscore": 23.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-30",
              "sumscore": 28.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-06",
              "sumscore": 123.52,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805229,
          "fullName": faker.name.findName(),
          "time": 213,
          "score": { "sum": 138, "count": 364 },
          "initialLevel": { "sum": 59, "count": 138 },
          "initialEval": 42,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 11,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4662,
                "name": "« j'ai été » ou « je suis allé » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4639,
                "name": "« différend » ou « différent » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4663,
                "name": "« tout énervée » ou « toute énervée » ?",
                "difficultyLevel": 9
              }
            ],
            "acquired": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 27
              },
              {
                "id": 4665,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4647,
                "name": "« fabricant » ou « fabriquant » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4657,
                "name": "« à l'attention de » ou « à l'intention de » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 14
              }
            ],
            "known": [
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4727,
                "name":
                  "« lui même » ou « lui-même » ? « eux-même » ou « eux-mêmes » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4572,
                "name": "« la plupart est » ou « la plupart sont » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4582,
                "name": "« c'est » ou « s'est » ? « ce sont » ou « se sont » ?",
                "difficultyLevel": 11
              }
            ]
          },
          "progData": [
            {
              "date": "2019-01-05",
              "sumscore": 45.52,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-06",
              "sumscore": 115.04,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-07",
              "sumscore": 128.68001,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 138.68001,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805218,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 64, "count": 364 },
          "initialLevel": { "sum": 23, "count": 64 },
          "initialEval": 16,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805283,
          "fullName": faker.name.findName(),
          "time": 517,
          "score": { "sum": 303, "count": 364 },
          "initialLevel": { "sum": 86, "count": 303 },
          "initialEval": 21,
          "lastConnection": "2019-03-31",
          "connectionsNbr": 66,
          "lastModule": "Excellence",
          "topNRules": {
            "focused": [
              {
                "id": 8952,
                "name": "accord après « le peu de »",
                "difficultyLevel": 100
              },
              {
                "id": 8921,
                "name": "« quelque… que » ou « quelques… que » ?",
                "difficultyLevel": 47
              },
              {
                "id": 8897,
                "name": "accord avec « plus d'un »",
                "difficultyLevel": 43
              },
              {
                "id": 8949,
                "name": "« il suffit seulement » : le pléonasme grammatical",
                "difficultyLevel": 43
              },
              {
                "id": 8906,
                "name": "« quelque » ou « quelques » ?",
                "difficultyLevel": 41
              }
            ],
            "acquired": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 117
              },
              {
                "id": 7978,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 57
              },
              {
                "id": 7993,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 51
              },
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 44
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 37
              }
            ],
            "known": [
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4604,
                "name": "« -euil » ou « -ueil » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4610,
                "name": "« presque » ou « presqu' » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4729,
                "name": "« du » ou « dû » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 10
              }
            ]
          },
          "progData": [
            { "date": "2018-10-18", "sumscore": 6.0, "moduleName": "Pro" },
            { "date": "2018-10-30", "sumscore": 29.0, "moduleName": "Pro" },
            { "date": "2018-11-07", "sumscore": 39.0, "moduleName": "Pro" },
            { "date": "2018-11-09", "sumscore": 46.0, "moduleName": "Pro" },
            { "date": "2018-11-20", "sumscore": 56.0, "moduleName": "Pro" },
            { "date": "2018-11-23", "sumscore": 58.0, "moduleName": "Pro" },
            { "date": "2018-12-04", "sumscore": 62.0, "moduleName": "Pro" },
            { "date": "2018-12-07", "sumscore": 73.0, "moduleName": "Pro" },
            { "date": "2018-12-10", "sumscore": 84.0, "moduleName": "Pro" },
            {
              "date": "2018-12-16",
              "sumscore": 96.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2018-12-22",
              "sumscore": 106.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2018-12-24",
              "sumscore": 107.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-01-01",
              "sumscore": 111.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-01-04",
              "sumscore": 129.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-01-08",
              "sumscore": 140.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-01-15",
              "sumscore": 147.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-17",
              "sumscore": 158.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-24",
              "sumscore": 164.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-02-07",
              "sumscore": 184.0,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-02-24",
              "sumscore": 197.0,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-03-02",
              "sumscore": 233.98,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-03-17",
              "sumscore": 243.98,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-03-28",
              "sumscore": 264.18,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-03-31",
              "sumscore": 303.68,
              "moduleName": "Excellence"
            }
          ]
        },
        {
          "id": 3805286,
          "fullName": faker.name.findName(),
          "time": 311,
          "score": { "sum": 105, "count": 364 },
          "initialLevel": { "sum": 31, "count": 105 },
          "initialEval": 22,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 24,
          "lastModule": "Pont supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 29
              },
              {
                "id": 4609,
                "name": "« voir » ou « voire » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 21
              },
              {
                "id": 4533,
                "name": "participe passé conjugué avec l'auxiliaire « être »",
                "difficultyLevel": 10
              },
              {
                "id": 4599,
                "name": "« diagnostic » ou « diagnostique » ?",
                "difficultyLevel": 8
              }
            ],
            "acquired": [
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4611,
                "name": "« censé » ou « sensé » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4538,
                "name": "« ou » ou « où » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 21
              }
            ],
            "known": [
              {
                "id": 4657,
                "name": "« à l'attention de » ou « à l'intention de » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4562,
                "name": "« ces » ou « ses » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4571,
                "name": "« plus tôt » ou « plutôt » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 12
              }
            ]
          },
          "progData": [
            { "date": "2018-11-05", "sumscore": 9.0, "moduleName": "Pro" },
            { "date": "2019-01-03", "sumscore": 19.0, "moduleName": "Pro" },
            { "date": "2019-01-05", "sumscore": 40.0, "moduleName": "Pro" },
            { "date": "2019-01-06", "sumscore": 46.52, "moduleName": "Pro" },
            { "date": "2019-01-07", "sumscore": 52.52, "moduleName": "Pro" },
            { "date": "2019-01-27", "sumscore": 57.46, "moduleName": "Pro" },
            { "date": "2019-03-22", "sumscore": 69.34, "moduleName": "Pro" },
            { "date": "2019-03-31", "sumscore": 76.34, "moduleName": "Pro" },
            { "date": "2019-04-01", "sumscore": 88.1, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805275,
          "fullName": faker.name.findName(),
          "time": 577,
          "score": { "sum": 132, "count": 364 },
          "initialLevel": { "sum": 19, "count": 132 },
          "initialEval": 14,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 56,
          "lastModule": "Pont supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4622,
                "name":
                  "« exigeant » ou « exigent » ? « exigeance » ou « exigence » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4630,
                "name": "« inclue » ou « incluse » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4729,
                "name": "« du » ou « dû » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4631,
                "name": "« pause » ou « pose » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4597,
                "name": "« aie », « aies » ou « ais » ?",
                "difficultyLevel": 9
              }
            ],
            "acquired": [
              {
                "id": 4613,
                "name": "« ci-joint » ou « ci-jointe » ?",
                "difficultyLevel": 77
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 76
              },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 68
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 64
              },
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 56
              }
            ],
            "known": [
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 61
              },
              {
                "id": 4730,
                "name":
                  "« apeller » ou « appeler » ? « rapelle » ou « rappelle » ?",
                "difficultyLevel": 60
              },
              {
                "id": 4553,
                "name": "« il travail » ou « il travaille » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4580,
                "name": "« hors » ou « or » ?",
                "difficultyLevel": 20
              }
            ]
          },
          "progData": [
            { "date": "2018-11-22", "sumscore": 9.0, "moduleName": "Pro" },
            { "date": "2018-12-06", "sumscore": 13.0, "moduleName": "Pro" },
            { "date": "2018-12-09", "sumscore": 16.0, "moduleName": "Pro" },
            { "date": "2018-12-18", "sumscore": 25.0, "moduleName": "Pro" },
            { "date": "2018-12-25", "sumscore": 46.0, "moduleName": "Pro" },
            { "date": "2019-01-02", "sumscore": 51.0, "moduleName": "Pro" },
            { "date": "2019-01-06", "sumscore": 52.0, "moduleName": "Pro" },
            { "date": "2019-01-24", "sumscore": 63.0, "moduleName": "Pro" },
            { "date": "2019-01-30", "sumscore": 74.0, "moduleName": "Pro" },
            { "date": "2019-03-19", "sumscore": 84.0, "moduleName": "Pro" },
            {
              "date": "2019-03-23",
              "sumscore": 124.68,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 131.56,
              "moduleName": "Pont supérieur"
            }
          ]
        },
        {
          "id": 3805272,
          "fullName": faker.name.findName(),
          "time": 124,
          "score": { "sum": 139, "count": 364 },
          "initialLevel": { "sum": 101, "count": 139 },
          "initialEval": 72,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 12,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4632,
                "name": "« -gable » ou « -guable » ?",
                "difficultyLevel": 5
              }
            ],
            "acquired": [
              {
                "id": 4659,
                "name": "« lorsque » ou « lorsqu' »",
                "difficultyLevel": 19
              },
              {
                "id": 4665,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4662,
                "name": "« j'ai été » ou « je suis allé » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4622,
                "name":
                  "« exigeant » ou « exigent » ? « exigeance » ou « exigence » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4652,
                "name":
                  "« pallier quelque chose » ou « pallier à quelque chose » ?",
                "difficultyLevel": 11
              }
            ],
            "known": [
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4612,
                "name":
                  "« ce faisant » ou « se faisant » ? « pour ce faire » ou « pour se faire » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 13
              },
              {
                "id": 4609,
                "name": "« voir » ou « voire » ?",
                "difficultyLevel": 10
              },
              {
                "id": 4654,
                "name": "« à l'instar de » ",
                "difficultyLevel": 10
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-20",
              "sumscore": 14.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 139.88,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805271,
          "fullName": faker.name.findName(),
          "time": 147,
          "score": { "sum": 116, "count": 364 },
          "initialLevel": { "sum": 52, "count": 116 },
          "initialEval": 37,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 7,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4598,
                "name": "« peut être » ou « peut-être » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 4
              }
            ],
            "acquired": [
              {
                "id": 4595,
                "name":
                  "« elle s'est fait faire » ou « elle s'est faite faire » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4583,
                "name": "«  tu tries » ou « tu tris » ? ",
                "difficultyLevel": 16
              },
              {
                "id": 4542,
                "name": "« j'envoie » ou « j'envois » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4631,
                "name": "« pause » ou « pose » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 12
              }
            ],
            "known": [
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 49
              },
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4608,
                "name": "« crée » ou « créée » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4569,
                "name": "« tous les » ou « tout les » ?",
                "difficultyLevel": 8
              },
              {
                "id": 4586,
                "name": "« voie » ou « voix » ?",
                "difficultyLevel": 8
              }
            ]
          },
          "progData": [
            {
              "date": "2019-01-06",
              "sumscore": 42.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 82.88,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805258,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 108, "count": 364 },
          "initialLevel": { "sum": 47, "count": 108 },
          "initialEval": 34,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805256,
          "fullName": faker.name.findName(),
          "time": 143,
          "score": { "sum": 121, "count": 364 },
          "initialLevel": { "sum": 55, "count": 121 },
          "initialEval": 39,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 10,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 39
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 34
              },
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 34
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 25
              },
              {
                "id": 4623,
                "name": "« quoique » ou « quoi que » ?",
                "difficultyLevel": 18
              }
            ],
            "acquired": [
              {
                "id": 4603,
                "name": "« davantage » ou « d'avantage(s) » ?",
                "difficultyLevel": 34
              },
              {
                "id": 4645,
                "name":
                  "« un chiffre d'affaire » ou « un chiffre d'affaires » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4557,
                "name": "« notre » ou « nôtre » ? « votre » ou « vôtre » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4631,
                "name": "« pause » ou « pose » ?",
                "difficultyLevel": 18
              }
            ],
            "known": [
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4600,
                "name": "« entretien » ou « entretient » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 12
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-17",
              "sumscore": 11.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-18",
              "sumscore": 28.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-23",
              "sumscore": 49.64,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-06",
              "sumscore": 83.28,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 96.799995,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805257,
          "fullName": faker.name.findName(),
          "time": 442,
          "score": { "sum": 156, "count": 364 },
          "initialLevel": { "sum": 52, "count": 156 },
          "initialEval": 35,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 33,
          "lastModule": "Orthotypographie",
          "topNRules": {
            "focused": [
              {
                "id": 7993,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 41
              },
              {
                "id": 7979,
                "name": "Abréviations : M<SUP>me</SUP> ; M<SUP>lle</SUP>",
                "difficultyLevel": 15
              },
              {
                "id": 7985,
                "name": "Éviter d'avoir deux deux-points dans une même phrase",
                "difficultyLevel": 14
              },
              {
                "id": 7980,
                "name": "Kg ou kg ou KG (kilogramme)",
                "difficultyLevel": 13
              },
              {
                "id": 7983,
                "name": "Le mot « heure » en abrégé",
                "difficultyLevel": 12
              }
            ],
            "acquired": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 95
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 87
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 82
              },
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 70
              },
              {
                "id": 4657,
                "name": "« à l'attention de » ou « à l'intention de » ?",
                "difficultyLevel": 55
              }
            ],
            "known": [
              {
                "id": 4620,
                "name": "« fond » ou « fonds » ?",
                "difficultyLevel": 42
              },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 36
              },
              {
                "id": 4727,
                "name":
                  "« lui même » ou « lui-même » ? « eux-même » ou « eux-mêmes » ?",
                "difficultyLevel": 25
              },
              { "id": 4537, "name": "« a » ou « à » ?", "difficultyLevel": 21 },
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 19
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-20",
              "sumscore": 5.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-21",
              "sumscore": 12.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-22",
              "sumscore": 23.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-23",
              "sumscore": 30.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-09",
              "sumscore": 36.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-12",
              "sumscore": 48.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-15",
              "sumscore": 50.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-19",
              "sumscore": 68.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-23",
              "sumscore": 70.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-05",
              "sumscore": 71.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-20",
              "sumscore": 86.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-02-22",
              "sumscore": 122.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 156.2,
              "moduleName": "Orthotypographie"
            }
          ]
        },
        {
          "id": 3805263,
          "fullName": faker.name.findName(),
          "time": 128,
          "score": { "sum": 111, "count": 364 },
          "initialLevel": { "sum": 67, "count": 111 },
          "initialEval": 48,
          "lastConnection": "2019-03-12",
          "connectionsNbr": 7,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              { "id": 4554, "name": "accent ou pas ?", "difficultyLevel": 28 },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4631,
                "name": "« pause » ou « pose » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4571,
                "name": "« plus tôt » ou « plutôt » ?",
                "difficultyLevel": 11
              }
            ],
            "acquired": [
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4592,
                "name": "« si il » ou « s'il » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4542,
                "name": "« j'envoie » ou « j'envois » ?",
                "difficultyLevel": 6
              },
              {
                "id": 4557,
                "name": "« notre » ou « nôtre » ? « votre » ou « vôtre » ?",
                "difficultyLevel": 6
              }
            ],
            "known": [
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4535,
                "name": "« avenir » ou « à venir » ?",
                "difficultyLevel": 14
              },
              { "id": 4537, "name": "« a » ou « à » ?", "difficultyLevel": 11 },
              {
                "id": 4734,
                "name": "« un employé » ou « un employer » ?",
                "difficultyLevel": 10
              }
            ]
          },
          "progData": [
            {
              "date": "2019-03-11",
              "sumscore": 41.4,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-12",
              "sumscore": 80.04,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805250,
          "fullName": faker.name.findName(),
          "time": 284,
          "score": { "sum": 140, "count": 364 },
          "initialLevel": { "sum": 83, "count": 140 },
          "initialEval": 59,
          "lastConnection": "2019-03-22",
          "connectionsNbr": 20,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 53
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 46
              },
              {
                "id": 4638,
                "name": "« -ions » ou « -iions » ? « -iez » ou « -iiez » ?",
                "difficultyLevel": 46
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4663,
                "name": "« tout énervée » ou « toute énervée » ?",
                "difficultyLevel": 32
              }
            ],
            "known": [
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 41
              },
              {
                "id": 4665,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 39
              },
              {
                "id": 4590,
                "name":
                  "« Est-ce que le repas est-il prêt ? » ou « Est-ce que le repas est prêt » ? ",
                "difficultyLevel": 27
              },
              {
                "id": 4642,
                "name": "« des tuniques bleu foncé » ou « bleues foncées » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4587,
                "name": "« huit heure » ou « huit heures » ?",
                "difficultyLevel": 23
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-05",
              "sumscore": 12.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-27",
              "sumscore": 44.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-31",
              "sumscore": 64.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-05",
              "sumscore": 70.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-06",
              "sumscore": 74.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-07",
              "sumscore": 94.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-18",
              "sumscore": 103.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-19",
              "sumscore": 104.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-22",
              "sumscore": 140.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805249,
          "fullName": faker.name.findName(),
          "time": 325,
          "score": { "sum": 139, "count": 364 },
          "initialLevel": { "sum": 61, "count": 139 },
          "initialEval": 44,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 26,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4665,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 32
              }
            ],
            "acquired": [
              {
                "id": 4739,
                "name": "« vingt » ou « vingts » ?",
                "difficultyLevel": 62
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 47
              },
              {
                "id": 4611,
                "name": "« censé » ou « sensé » ?",
                "difficultyLevel": 46
              },
              {
                "id": 4604,
                "name": "« -euil » ou « -ueil » ?",
                "difficultyLevel": 44
              },
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 42
              }
            ],
            "known": [
              {
                "id": 4642,
                "name": "« des tuniques bleu foncé » ou « bleues foncées » ?",
                "difficultyLevel": 65
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 55
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 42
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4633,
                "name": "« soi-disant » ou « soit-disant » ?",
                "difficultyLevel": 33
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-19",
              "sumscore": 18.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-02",
              "sumscore": 30.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-03",
              "sumscore": 31.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-04",
              "sumscore": 49.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-07",
              "sumscore": 80.94,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-31",
              "sumscore": 111.94,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 139.94,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805254,
          "fullName": faker.name.findName(),
          "time": 630,
          "score": { "sum": 163, "count": 364 },
          "initialLevel": { "sum": 55, "count": 163 },
          "initialEval": 34,
          "lastConnection": "2019-03-11",
          "connectionsNbr": 42,
          "lastModule": "Orthotypographie",
          "topNRules": {
            "focused": [
              {
                "id": 7993,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 70
              },
              {
                "id": 7984,
                "name":
                  "L'usage ou non de la virgule autour des propositions relatives",
                "difficultyLevel": 47
              },
              {
                "id": 7977,
                "name":
                  "Abréviation des nombres ordinaux : 1<SUP>er</SUP> ; 1<SUP>re</SUP> ; 2<SUP>e</SUP> ; 3<SUP>e</SUP>…",
                "difficultyLevel": 35
              },
              {
                "id": 7989,
                "name":
                  "Premier Ministre, premier Ministre ou Premier ministre ; ministre des Affaires étrangères…",
                "difficultyLevel": 33
              },
              {
                "id": 7976,
                "name":
                  "Guillemets : point avant ou après le guillemet fermant",
                "difficultyLevel": 25
              }
            ],
            "acquired": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 121
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 76
              },
              {
                "id": 4657,
                "name": "« à l'attention de » ou « à l'intention de » ?",
                "difficultyLevel": 61
              },
              {
                "id": 4665,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 60
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 56
              }
            ],
            "known": [
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 50
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 44
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4556,
                "name": "« est » ou « et » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 27
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-18",
              "sumscore": 7.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-23",
              "sumscore": 11.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-25",
              "sumscore": 14.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-02",
              "sumscore": 35.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-06",
              "sumscore": 39.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-10",
              "sumscore": 42.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-26",
              "sumscore": 47.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-31",
              "sumscore": 51.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-03",
              "sumscore": 84.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-13",
              "sumscore": 86.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-19",
              "sumscore": 89.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-20",
              "sumscore": 91.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-26",
              "sumscore": 97.64,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-31",
              "sumscore": 98.64,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-02-02",
              "sumscore": 107.34,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-02-03",
              "sumscore": 118.34,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-02-09",
              "sumscore": 125.34,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-03",
              "sumscore": 146.34,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-11",
              "sumscore": 163.34,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805255,
          "fullName": faker.name.findName(),
          "time": 18,
          "score": { "sum": 87, "count": 364 },
          "initialLevel": { "sum": 46, "count": 87 },
          "initialEval": 33,
          "lastConnection": "2019-03-05",
          "connectionsNbr": 3,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4557,
                "name": "« notre » ou « nôtre » ? « votre » ou « vôtre » ?",
                "difficultyLevel": 1
              }
            ],
            "acquired": [
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 9
              },
              {
                "id": 4556,
                "name": "« est » ou « et » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4547,
                "name": "« on » ou « ont » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 1
              }
            ],
            "known": [
              {
                "id": 4535,
                "name": "« avenir » ou « à venir » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4566,
                "name": "« en fesant » ou « en faisant » ? ",
                "difficultyLevel": 10
              },
              {
                "id": 4565,
                "name": "« mieu » ou « mieux » ?",
                "difficultyLevel": 9
              },
              {
                "id": 4539,
                "name": "« ça », « çà » ou « sa » ?",
                "difficultyLevel": 8
              },
              {
                "id": 4550,
                "name":
                  "« tu mange » ou « tu manges » ? « tu mangera » ou « tu mangeras » ?",
                "difficultyLevel": 7
              }
            ]
          },
          "progData": [
            {
              "date": "2019-01-07",
              "sumscore": 14.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-05",
              "sumscore": 26.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805252,
          "fullName": faker.name.findName(),
          "time": 201,
          "score": { "sum": 113, "count": 364 },
          "initialLevel": { "sum": 55, "count": 113 },
          "initialEval": 39,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 13,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 10
              },
              {
                "id": 4656,
                "name": "« éi » ou « éï » ?",
                "difficultyLevel": 9
              },
              {
                "id": 4630,
                "name": "« inclue » ou « incluse » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4601,
                "name":
                  "« magazin » ou « magasin » ? « magasine » ou « magazine » ?",
                "difficultyLevel": 5
              }
            ],
            "acquired": [
              {
                "id": 4557,
                "name": "« notre » ou « nôtre » ? « votre » ou « vôtre » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4595,
                "name":
                  "« elle s'est fait faire » ou « elle s'est faite faire » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4610,
                "name": "« presque » ou « presqu' » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4540,
                "name": "« dans » ou « d'en » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 17
              }
            ],
            "known": [
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4598,
                "name": "« peut être » ou « peut-être » ?",
                "difficultyLevel": 28
              },
              {
                "id": 4538,
                "name": "« ou » ou « où » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4549,
                "name": "« nous nous amusont » ou « nous nous amusons » ?",
                "difficultyLevel": 19
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-19",
              "sumscore": 8.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-19",
              "sumscore": 46.88,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-04",
              "sumscore": 83.880005,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 94.880005,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805253,
          "fullName": faker.name.findName(),
          "time": 404,
          "score": { "sum": 137, "count": 364 },
          "initialLevel": { "sum": 53, "count": 137 },
          "initialEval": 38,
          "lastConnection": "2019-03-10",
          "connectionsNbr": 19,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 38
              },
              {
                "id": 4665,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4662,
                "name": "« j'ai été » ou « je suis allé » ?",
                "difficultyLevel": 31
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4729,
                "name": "« du » ou « dû » ?",
                "difficultyLevel": 21
              }
            ],
            "acquired": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 40
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 32
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 23
              }
            ],
            "known": [
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 51
              },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 51
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 29
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 21
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-20",
              "sumscore": 33.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-04",
              "sumscore": 64.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-02-04",
              "sumscore": 77.4,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-02-06",
              "sumscore": 89.340004,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-07",
              "sumscore": 124.44,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-10",
              "sumscore": 137.48,
              "moduleName": "Supérieur"
            }
          ]
        }
      ],
      "insights": {
        "lastWeek": {
          "time": { "sum": 0, "sumd": -9 },
          "score": { "sum": 1, "sumd": -17 },
          "activeUsers": { "sum": 2, "sumd": -13 },
          "inactiveUsers": { "sum": 24, "sumd": 13 },
          "connections": [
            { "count": 1, "date": "2019-04-02" },
            { "count": 0, "date": "2019-04-03" },
            { "count": 1, "date": "2019-04-04" },
            { "count": 0, "date": "2019-04-05" },
            { "count": 3, "date": "2019-04-06" },
            { "count": 0, "date": "2019-04-07" },
            { "count": 0, "date": "2019-04-08" }
          ],
          "topNRules": {
            "focused": [
              {
                "id": 8952,
                "name": "accord après « le peu de »",
                "difficultyLevel": 100
              },
              {
                "id": 8921,
                "name": "« quelque… que » ou « quelques… que » ?",
                "difficultyLevel": 47
              },
              {
                "id": 8185,
                "name":
                  "L'usage ou non de la virgule autour des propositions relatives",
                "difficultyLevel": 47
              },
              {
                "id": 8194,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 47
              },
              {
                "id": 3075,
                "name":
                  "« personel » ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 45
              }
            ],
            "acquired": [
              {
                "id": 4210,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 77
              },
              {
                "id": 8195,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 58
              },
              {
                "id": 3109,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 56
              },
              {
                "id": 8194,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 53
              },
              {
                "id": 3098,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 39
              }
            ],
            "known": [
              {
                "id": 3128,
                "name": "« tout énervée » ou « toute énervée » ?",
                "difficultyLevel": 55
              },
              {
                "id": 3109,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 40
              },
              {
                "id": 3130,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 39
              },
              {
                "id": 3541,
                "name":
                  "« apeller » ou « appeler » ? « rapelle » ou « rappelle » ?",
                "difficultyLevel": 35
              },
              {
                "id": 3493,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 32
              }
            ]
          },
          "topNUsers": {
            "score": [
              { "id": 3805234, "sum": { "sum": 25, "sumd": 22 } },
              { "id": 4218945, "sum": { "sum": 14, "sumd": 14 } }
            ],
            "time": [
              { "id": 3805234, "sum": { "sum": 25, "sumd": 15 } },
              { "id": 4218945, "sum": { "sum": 13, "sumd": 13 } },
              { "id": 3805275, "sum": { "sum": 0, "sumd": -18 } },
              { "id": 3805218, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805250, "sum": { "sum": 0, "sumd": 0 } }
            ],
            "help": [
              { "id": 3805234, "sum": { "sum": 16, "sumd": 0 } },
              { "id": 4218945, "sum": { "sum": 4, "sumd": 4 } }
            ],
            "dropout": [
              { "id": 3805226, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805275, "sum": { "sum": 0, "sumd": -18 } },
              { "id": 3805218, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805250, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805252, "sum": { "sum": 0, "sumd": -40 } }
            ]
          }
        },
        "lastMonth": {
          "time": { "sum": 15, "sumd": 12 },
          "score": { "sum": 29, "sumd": 20 },
          "activeUsers": { "sum": 10, "sumd": 7 },
          "inactiveUsers": { "sum": 16, "sumd": -7 },
          "connections": [
            { "count": 4, "date": "2019-03-10" },
            { "count": 6, "date": "2019-03-11" },
            { "count": 3, "date": "2019-03-12" },
            { "count": 0, "date": "2019-03-13" },
            { "count": 0, "date": "2019-03-14" },
            { "count": 0, "date": "2019-03-15" },
            { "count": 0, "date": "2019-03-16" },
            { "count": 5, "date": "2019-03-17" },
            { "count": 2, "date": "2019-03-18" },
            { "count": 3, "date": "2019-03-19" },
            { "count": 0, "date": "2019-03-20" },
            { "count": 1, "date": "2019-03-21" },
            { "count": 5, "date": "2019-03-22" },
            { "count": 7, "date": "2019-03-23" },
            { "count": 0, "date": "2019-03-24" },
            { "count": 0, "date": "2019-03-25" },
            { "count": 0, "date": "2019-03-26" },
            { "count": 0, "date": "2019-03-27" },
            { "count": 2, "date": "2019-03-28" },
            { "count": 0, "date": "2019-03-29" },
            { "count": 3, "date": "2019-03-30" },
            { "count": 13, "date": "2019-03-31" },
            { "count": 32, "date": "2019-04-01" },
            { "count": 1, "date": "2019-04-02" },
            { "count": 0, "date": "2019-04-03" },
            { "count": 1, "date": "2019-04-04" },
            { "count": 0, "date": "2019-04-05" },
            { "count": 3, "date": "2019-04-06" },
            { "count": 0, "date": "2019-04-07" },
            { "count": 0, "date": "2019-04-08" }
          ],
          "topNRules": {
            "focused": [
              {
                "id": 8952,
                "name": "accord après « le peu de »",
                "difficultyLevel": 100
              },
              {
                "id": 8921,
                "name": "« quelque… que » ou « quelques… que » ?",
                "difficultyLevel": 47
              },
              {
                "id": 8185,
                "name":
                  "L'usage ou non de la virgule autour des propositions relatives",
                "difficultyLevel": 47
              },
              {
                "id": 8194,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 47
              },
              {
                "id": 3075,
                "name":
                  "« personel » ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 45
              }
            ],
            "acquired": [
              {
                "id": 4210,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 77
              },
              {
                "id": 8195,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 58
              },
              {
                "id": 3109,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 56
              },
              {
                "id": 8194,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 53
              },
              {
                "id": 3098,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 39
              }
            ],
            "known": [
              {
                "id": 3128,
                "name": "« tout énervée » ou « toute énervée » ?",
                "difficultyLevel": 55
              },
              {
                "id": 3109,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 40
              },
              {
                "id": 3130,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 39
              },
              {
                "id": 3541,
                "name":
                  "« apeller » ou « appeler » ? « rapelle » ou « rappelle » ?",
                "difficultyLevel": 35
              },
              {
                "id": 3493,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 32
              }
            ]
          },
          "topNUsers": {
            "score": [
              { "id": 3805272, "sum": { "sum": 126, "sumd": 126 } },
              { "id": 3805263, "sum": { "sum": 80, "sumd": 80 } },
              { "id": 3805283, "sum": { "sum": 70, "sumd": 20 } },
              { "id": 3805249, "sum": { "sum": 59, "sumd": 59 } },
              { "id": 3805275, "sum": { "sum": 57, "sumd": 56 } }
            ],
            "time": [
              { "id": 3805244, "sum": { "sum": 166, "sumd": 166 } },
              { "id": 3805275, "sum": { "sum": 142, "sumd": 141 } },
              { "id": 3805283, "sum": { "sum": 135, "sumd": 66 } },
              { "id": 3805263, "sum": { "sum": 128, "sumd": 128 } },
              { "id": 3805272, "sum": { "sum": 116, "sumd": 116 } }
            ],
            "help": [
              { "id": 3805253, "sum": { "sum": 23, "sumd": 10 } },
              { "id": 3805244, "sum": { "sum": 23, "sumd": 23 } },
              { "id": 3805250, "sum": { "sum": 21, "sumd": 21 } },
              { "id": 3805249, "sum": { "sum": 21, "sumd": 21 } },
              { "id": 3805257, "sum": { "sum": 20, "sumd": -7 } }
            ],
            "dropout": [
              { "id": 3805226, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805258, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805218, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805238, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805255, "sum": { "sum": 0, "sumd": 0 } }
            ]
          }
        }
      },
      "modules": [
        {
          "key": "Pro",
          "index": 0,
          "nbrOfRules": 84,
          "routeId": 62,
          "productId": 55
        },
        {
          "key": "Pont supérieur",
          "index": 1,
          "nbrOfRules": 56,
          "routeId": 62,
          "productId": 56
        },
        {
          "key": "Orthotypographie",
          "index": 2,
          "nbrOfRules": 24,
          "routeId": 62,
          "productId": 57
        },
        {
          "key": "Excellence",
          "index": 3,
          "nbrOfRules": 200,
          "routeId": 62,
          "productId": 71
        },
        {
          "key": "Supérieur",
          "index": 0,
          "nbrOfRules": 140,
          "routeId": 68,
          "productId": 53
        },
        {
          "key": "Orthotypographie",
          "index": 2,
          "nbrOfRules": 24,
          "routeId": 68,
          "productId": 57
        },
        {
          "key": "Excellence",
          "index": 3,
          "nbrOfRules": 200,
          "routeId": 68,
          "productId": 71
        }
      ],
      "evaluations": [
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805218,
          "mark": null,
          "score": 16,
          "time": 32.95
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805218,
          "mark": 3.0,
          "score": 26,
          "time": 34.3667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805218,
          "mark": 2.0,
          "score": 14,
          "time": 34.95
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805226,
          "mark": null,
          "score": 64,
          "time": 39.5
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805226,
          "mark": 6.5,
          "score": 62,
          "time": 40.3667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805226,
          "mark": 5.5,
          "score": 44,
          "time": 36.4
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805229,
          "mark": null,
          "score": 42,
          "time": 52.75
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805229,
          "mark": 10.5,
          "score": 71,
          "time": 44.6833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805229,
          "mark": 5.0,
          "score": 38,
          "time": 46.5833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805229,
          "mark": 9.0,
          "score": 62,
          "time": 49.9167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805234,
          "mark": null,
          "score": 21,
          "time": 55.95
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805234,
          "mark": 12.0,
          "score": 69,
          "time": 44.7667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805234,
          "mark": 12.0,
          "score": 63,
          "time": 36.25
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805234,
          "mark": 12.0,
          "score": 59,
          "time": 37.6333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805236,
          "mark": null,
          "score": 38,
          "time": 42.3333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805236,
          "mark": 5.0,
          "score": 43,
          "time": 39.9667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805236,
          "mark": 5.0,
          "score": 44,
          "time": 41.6
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805236,
          "mark": 6.0,
          "score": 46,
          "time": 37.4667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805238,
          "mark": null,
          "score": 19,
          "time": 36.4167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805238,
          "mark": 2.0,
          "score": 21,
          "time": 42.7833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805238,
          "mark": 3.0,
          "score": 26,
          "time": 40.9333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805239,
          "mark": null,
          "score": 35,
          "time": 48.7333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805239,
          "mark": 13.5,
          "score": 74,
          "time": 45.3333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805239,
          "mark": 12.0,
          "score": 67,
          "time": 46.1333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805239,
          "mark": 11.0,
          "score": 60,
          "time": 50.1333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805244,
          "mark": null,
          "score": 56,
          "time": 34.95
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805244,
          "mark": 8.5,
          "score": 40,
          "time": 54.4833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805244,
          "mark": 9.5,
          "score": 39,
          "time": 54.95
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805246,
          "mark": null,
          "score": 50,
          "time": 48.1667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805246,
          "mark": 9.0,
          "score": 63,
          "time": 34.3333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805246,
          "mark": 9.5,
          "score": 58,
          "time": 47.65
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805246,
          "mark": 11.5,
          "score": 67,
          "time": 41.5167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805247,
          "mark": null,
          "score": 26,
          "time": 27.4167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805247,
          "mark": 3.0,
          "score": 30,
          "time": 20.4833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805247,
          "mark": 3.5,
          "score": 30,
          "time": 36.0667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805249,
          "mark": null,
          "score": 44,
          "time": 49.6
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805249,
          "mark": 11.5,
          "score": 74,
          "time": 43.4667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805249,
          "mark": 10.5,
          "score": 68,
          "time": 47.6
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805249,
          "mark": 11.0,
          "score": 70,
          "time": 43.3833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805250,
          "mark": null,
          "score": 59,
          "time": 55.2
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805250,
          "mark": 11.5,
          "score": 81,
          "time": 34.0
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805250,
          "mark": 14.0,
          "score": 89,
          "time": 44.85
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805252,
          "mark": null,
          "score": 39,
          "time": 55.0333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805252,
          "mark": 7.0,
          "score": 55,
          "time": 25.1667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805252,
          "mark": 5.5,
          "score": 44,
          "time": 27.1
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805252,
          "mark": 8.0,
          "score": 58,
          "time": 26.4333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805253,
          "mark": null,
          "score": 38,
          "time": 39.6667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805253,
          "mark": 5.5,
          "score": 41,
          "time": 38.8833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805253,
          "mark": 6.0,
          "score": 43,
          "time": 36.7167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805253,
          "mark": 10.0,
          "score": 57,
          "time": 33.3167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805254,
          "mark": null,
          "score": 34,
          "time": 44.4167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805254,
          "mark": 10.5,
          "score": 54,
          "time": 32.3167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805254,
          "mark": 13.0,
          "score": 61,
          "time": 23.5167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805254,
          "mark": 15.0,
          "score": 69,
          "time": 46.05
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805255,
          "mark": null,
          "score": 33,
          "time": 33.3333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805255,
          "mark": 4.0,
          "score": 38,
          "time": 42.7167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805255,
          "mark": 4.5,
          "score": 39,
          "time": 44.9
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805256,
          "mark": null,
          "score": 39,
          "time": 22.2167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805256,
          "mark": 7.0,
          "score": 54,
          "time": 34.4333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805256,
          "mark": 4.5,
          "score": 39,
          "time": 16.7167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805256,
          "mark": 7.0,
          "score": 51,
          "time": 23.0
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805257,
          "mark": null,
          "score": 35,
          "time": 18.2
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805257,
          "mark": 10.5,
          "score": 63,
          "time": 30.8667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805257,
          "mark": 10.0,
          "score": 58,
          "time": 20.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805257,
          "mark": 12.5,
          "score": 68,
          "time": 26.7333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805258,
          "mark": null,
          "score": 34,
          "time": 37.6667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805258,
          "mark": 2.0,
          "score": 18,
          "time": 32.7167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805258,
          "mark": 8.0,
          "score": 62,
          "time": 39.5167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805263,
          "mark": null,
          "score": 48,
          "time": 46.1333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805263,
          "mark": 5.0,
          "score": 51,
          "time": 35.4833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805271,
          "mark": null,
          "score": 37,
          "time": 55.8333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805271,
          "mark": 7.5,
          "score": 57,
          "time": 51.5167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805271,
          "mark": 9.0,
          "score": 64,
          "time": 49.7
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805272,
          "mark": null,
          "score": 72,
          "time": 36.2667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805272,
          "mark": 6.5,
          "score": 69,
          "time": 29.8833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805272,
          "mark": 7.0,
          "score": 71,
          "time": 30.95
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805272,
          "mark": 13.5,
          "score": 93,
          "time": 24.3
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805275,
          "mark": null,
          "score": 14,
          "time": 55.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805275,
          "mark": 9.5,
          "score": 47,
          "time": 47.6167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805275,
          "mark": 7.0,
          "score": 23,
          "time": 55.7667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805275,
          "mark": 13.0,
          "score": 57,
          "time": 51.2833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805283,
          "mark": null,
          "score": 21,
          "time": 55.9667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805283,
          "mark": 13.5,
          "score": 84,
          "time": 38.4
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805283,
          "mark": 4.0,
          "score": 1,
          "time": 5.85
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février V2",
          "id": 3805283,
          "mark": 13.5,
          "score": 76,
          "time": 38.8833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805283,
          "mark": 15.5,
          "score": 77,
          "time": 28.8667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805286,
          "mark": null,
          "score": 22,
          "time": 54.25
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805286,
          "mark": 5.0,
          "score": 30,
          "time": 53.45
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805286,
          "mark": 5.0,
          "score": 31,
          "time": 55.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805286,
          "mark": 8.5,
          "score": 47,
          "time": 51.4
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 4218945,
          "mark": null,
          "score": 40,
          "time": 37.65
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 4218945,
          "mark": 4.5,
          "score": 45,
          "time": 40.6167
        }
      ]
    },
    {
      "id": 82125,
      "users": [
        {
          "id": 3805242,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 81, "count": 364 },
          "initialLevel": { "sum": 33, "count": 81 },
          "initialEval": 24,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 4218944,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 70, "count": 364 },
          "initialLevel": { "sum": 49, "count": 70 },
          "initialEval": 35,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805298,
          "fullName": faker.name.findName(),
          "time": 29,
          "score": { "sum": 114, "count": 364 },
          "initialLevel": { "sum": 92, "count": 114 },
          "initialEval": 66,
          "lastConnection": "2019-03-18",
          "connectionsNbr": 3,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4559,
                "name": "« cauchemar » ou « cauchemard » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4572,
                "name": "« la plupart est » ou « la plupart sont » ?",
                "difficultyLevel": 4
              },
              {
                "id": 4564,
                "name": "« quand » ou « qu'en » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 2
              },
              { "id": 4538, "name": "« ou » ou « où » ?", "difficultyLevel": 2 }
            ],
            "known": [
              { "id": 4537, "name": "« a » ou « à » ?", "difficultyLevel": 7 },
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4534,
                "name": "« son » ou « sont » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4535,
                "name": "« avenir » ou « à venir » ?",
                "difficultyLevel": 3
              }
            ]
          },
          "progData": [
            {
              "date": "2019-03-11",
              "sumscore": 14.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-18",
              "sumscore": 42.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805235,
          "fullName": faker.name.findName(),
          "time": 196,
          "score": { "sum": 100, "count": 364 },
          "initialLevel": { "sum": 61, "count": 100 },
          "initialEval": 44,
          "lastConnection": "2019-04-05",
          "connectionsNbr": 15,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 100
              },
              {
                "id": 4625,
                "name":
                  "« ils sont debouts » ou « ils sont debout » ? « ils sont ensembles » ou « ils sont ensemble » ?",
                "difficultyLevel": 39
              },
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 35
              },
              {
                "id": 4590,
                "name":
                  "« Est-ce que le repas est-il prêt ? » ou « Est-ce que le repas est prêt » ? ",
                "difficultyLevel": 30
              }
            ],
            "acquired": [
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 47
              },
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 42
              },
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 36
              },
              {
                "id": 4562,
                "name": "« ces » ou « ses » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4592,
                "name": "« si il » ou « s'il » ?",
                "difficultyLevel": 25
              }
            ],
            "known": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 74
              },
              { "id": 4589, "name": "« c » ou « ç » ?", "difficultyLevel": 42 },
              {
                "id": 4541,
                "name": "« vous parler » ou « vous parlez » ?",
                "difficultyLevel": 37
              },
              {
                "id": 4550,
                "name":
                  "« tu mange » ou « tu manges » ? « tu mangera » ou « tu mangeras » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 29
              }
            ]
          },
          "progData": [
            {
              "date": "2019-01-05",
              "sumscore": 23.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-02",
              "sumscore": 27.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-03",
              "sumscore": 53.92,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-04",
              "sumscore": 73.799995,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-05",
              "sumscore": 85.799995,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805297,
          "fullName": faker.name.findName(),
          "time": 252,
          "score": { "sum": 112, "count": 364 },
          "initialLevel": { "sum": 38, "count": 112 },
          "initialEval": 27,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 30,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4541,
                "name": "« vous parler » ou « vous parlez » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 17
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 10
              },
              {
                "id": 4639,
                "name": "« différend » ou « différent » ?",
                "difficultyLevel": 8
              }
            ],
            "acquired": [
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 78
              },
              {
                "id": 4603,
                "name": "« davantage » ou « d'avantage(s) » ?",
                "difficultyLevel": 41
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 34
              },
              {
                "id": 4604,
                "name": "« -euil » ou « -ueil » ?",
                "difficultyLevel": 31
              },
              {
                "id": 4556,
                "name": "« est » ou « et » ?",
                "difficultyLevel": 27
              }
            ],
            "known": [
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4583,
                "name": "« tu tries » ou « tu tris » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 17
              }
            ]
          },
          "progData": [
            { "date": "2018-11-21", "sumscore": 24.0, "moduleName": "Pro" },
            { "date": "2019-01-02", "sumscore": 62.64, "moduleName": "Pro" },
            { "date": "2019-01-07", "sumscore": 69.52, "moduleName": "Pro" },
            { "date": "2019-04-01", "sumscore": 83.159996, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805237,
          "fullName": faker.name.findName(),
          "time": 32,
          "score": { "sum": 115, "count": 364 },
          "initialLevel": { "sum": 69, "count": 115 },
          "initialEval": 49,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 6,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 9
              },
              {
                "id": 4583,
                "name": "«  tu tries » ou « tu tris » ? ",
                "difficultyLevel": 6
              },
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 6
              },
              {
                "id": 4577,
                "name": "« un envoie » ou « un envoi » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4582,
                "name": "« c'est » ou « s'est » ? « ce sont » ou « se sont » ?",
                "difficultyLevel": 5
              }
            ],
            "known": [
              {
                "id": 4562,
                "name": "« ces » ou « ses » ?",
                "difficultyLevel": 11
              },
              { "id": 4554, "name": "accent ou pas ?", "difficultyLevel": 7 },
              {
                "id": 4573,
                "name": "« ni » ou « n'y » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4588,
                "name": "« il se détend » ou « il se détent » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4600,
                "name": "« entretien » ou « entretient » ?",
                "difficultyLevel": 7
              }
            ]
          },
          "progData": [
            {
              "date": "2019-04-01",
              "sumscore": 56.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805227,
          "fullName": faker.name.findName(),
          "time": 430,
          "score": { "sum": 122, "count": 364 },
          "initialLevel": { "sum": 51, "count": 122 },
          "initialEval": 36,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 13,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4604,
                "name": "« -euil » ou « -ueil » ?",
                "difficultyLevel": 42
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4639,
                "name": "« différend » ou « différent » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4641,
                "name": "« des nuages blanc » ou « des nuages blancs » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4602,
                "name": "« vous dites » ou « vous dîtes » ?",
                "difficultyLevel": 1
              }
            ],
            "acquired": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 24
              },
              {
                "id": 4583,
                "name": "«  tu tries » ou « tu tris » ? ",
                "difficultyLevel": 24
              },
              {
                "id": 4592,
                "name": "« si il » ou « s'il » ?",
                "difficultyLevel": 22
              },
              {
                "id": 3218,
                "name":
                  "« personel » ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4548,
                "name": "« je le savais » ou « je le savait » ?",
                "difficultyLevel": 19
              }
            ],
            "known": [
              {
                "id": 4586,
                "name": "« voie » ou « voix » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 26
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 16
              }
            ]
          },
          "progData": [
            {
              "date": "2019-01-03",
              "sumscore": 30.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-05",
              "sumscore": 70.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-06",
              "sumscore": 83.88,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 106.759995,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805224,
          "fullName": faker.name.findName(),
          "time": 135,
          "score": { "sum": 100, "count": 364 },
          "initialLevel": { "sum": 29, "count": 100 },
          "initialEval": 21,
          "lastConnection": "2019-04-02",
          "connectionsNbr": 13,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4564,
                "name": "« quand » ou « qu'en » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4577,
                "name": "« un envoie » ou « un envoi » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4582,
                "name": "« c'est » ou « s'est » ? « ce sont » ou « se sont » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4540,
                "name": "« dans » ou « d'en » ?",
                "difficultyLevel": 10
              }
            ],
            "acquired": [
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 39
              },
              {
                "id": 4553,
                "name": "« il travail » ou « il travaille » ?",
                "difficultyLevel": 29
              },
              {
                "id": 4571,
                "name": "« plus tôt » ou « plutôt » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4549,
                "name": "« nous nous amusont » ou « nous nous amusons » ?",
                "difficultyLevel": 18
              }
            ],
            "known": [
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 46
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 32
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4547,
                "name": "« on » ou « ont » ?",
                "difficultyLevel": 15
              }
            ]
          },
          "progData": [
            { "date": "2018-10-22", "sumscore": 1.0, "moduleName": "Pro" },
            { "date": "2018-10-27", "sumscore": 4.0, "moduleName": "Pro" },
            { "date": "2018-10-28", "sumscore": 6.0, "moduleName": "Pro" },
            { "date": "2018-10-29", "sumscore": 8.0, "moduleName": "Pro" },
            { "date": "2018-11-09", "sumscore": 27.76, "moduleName": "Pro" },
            {
              "date": "2018-11-21",
              "sumscore": 34.760002,
              "moduleName": "Pro"
            },
            { "date": "2019-04-02", "sumscore": 40.640003, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805289,
          "fullName": faker.name.findName(),
          "time": 154,
          "score": { "sum": 127, "count": 364 },
          "initialLevel": { "sum": 58, "count": 127 },
          "initialEval": 41,
          "lastConnection": "2018-11-18",
          "connectionsNbr": 13,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4640,
                "name": "« parti » ou « partie » ?",
                "difficultyLevel": 31
              },
              {
                "id": 4633,
                "name": "« soi-disant » ou « soit-disant » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 8
              },
              {
                "id": 4635,
                "name": "« quelque » ou « quel que » ?",
                "difficultyLevel": 8
              },
              {
                "id": 4645,
                "name":
                  "« un chiffre d'affaire » ou « un chiffre d'affaires » ?",
                "difficultyLevel": 8
              }
            ],
            "acquired": [
              {
                "id": 4727,
                "name":
                  "« lui même » ou « lui-même » ? « eux-même » ou « eux-mêmes » ?",
                "difficultyLevel": 47
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 41
              },
              {
                "id": 4739,
                "name": "« vingt » ou « vingts » ?",
                "difficultyLevel": 34
              },
              {
                "id": 4612,
                "name":
                  "« ce faisant » ou « se faisant » ? « pour ce faire » ou « pour se faire » ?",
                "difficultyLevel": 30
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 23
              }
            ],
            "known": [
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 50
              },
              {
                "id": 4604,
                "name": "« -euil » ou « -ueil » ?",
                "difficultyLevel": 37
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 13
              },
              {
                "id": 4603,
                "name": "« davantage » ou « d'avantage(s) » ?",
                "difficultyLevel": 12
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-17",
              "sumscore": 97.28,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-18",
              "sumscore": 127.32,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805230,
          "fullName": faker.name.findName(),
          "time": 88,
          "score": { "sum": 104, "count": 364 },
          "initialLevel": { "sum": 41, "count": 104 },
          "initialEval": 29,
          "lastConnection": "2019-02-05",
          "connectionsNbr": 13,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              {
                "id": 4590,
                "name":
                  "« Est-ce que le repas est-il prêt ? » ou « Est-ce que le repas est prêt » ?",
                "difficultyLevel": 9
              },
              {
                "id": 4619,
                "name": "« parmi » ou « parmis » ?",
                "difficultyLevel": 8
              }
            ],
            "acquired": [
              {
                "id": 4582,
                "name": "« c'est » ou « s'est » ? « ce sont » ou « se sont » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 14
              }
            ],
            "known": [
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 28
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4547,
                "name": "« on » ou « ont » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4540,
                "name": "« dans » ou « d'en » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4571,
                "name": "« plus tôt » ou « plutôt » ?",
                "difficultyLevel": 11
              }
            ]
          },
          "progData": [
            { "date": "2018-10-20", "sumscore": 6.0, "moduleName": "Pro" },
            { "date": "2018-10-21", "sumscore": 10.0, "moduleName": "Pro" },
            { "date": "2018-10-22", "sumscore": 13.0, "moduleName": "Pro" },
            { "date": "2019-01-06", "sumscore": 27.0, "moduleName": "Pro" },
            { "date": "2019-01-19", "sumscore": 43.88, "moduleName": "Pro" },
            { "date": "2019-02-05", "sumscore": 55.760002, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805294,
          "fullName": faker.name.findName(),
          "time": 45,
          "score": { "sum": 68, "count": 364 },
          "initialLevel": { "sum": 33, "count": 68 },
          "initialEval": 24,
          "lastConnection": "2019-04-05",
          "connectionsNbr": 6,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              { "id": 4537, "name": "« a » ou « à » ?", "difficultyLevel": 13 },
              {
                "id": 4538,
                "name": "« ou » ou « où » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4569,
                "name": "« tous les » ou « tout les » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4577,
                "name": "« un envoie » ou « un envoi » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4574,
                "name": "« quand » ou « quant » ?",
                "difficultyLevel": 5
              }
            ],
            "acquired": [
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4541,
                "name": "« vous parler » ou « vous parlez » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4734,
                "name": "« un employé » ou « un employer » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 5
              }
            ],
            "known": [
              {
                "id": 4556,
                "name": "« est » ou « et » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4578,
                "name": "« qu'il ait » ou « qu'il est » ?",
                "difficultyLevel": 10
              },
              {
                "id": 4582,
                "name": "« c'est » ou « s'est » ? « ce sont » ou « se sont » ?",
                "difficultyLevel": 9
              },
              {
                "id": 4549,
                "name": "« nous nous amusont » ou « nous nous amusons » ?",
                "difficultyLevel": 7
              }
            ]
          },
          "progData": [
            { "date": "2019-04-03", "sumscore": 20.88, "moduleName": "Pro" },
            { "date": "2019-04-05", "sumscore": 34.28, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805295,
          "fullName": faker.name.findName(),
          "time": 568,
          "score": { "sum": 290, "count": 364 },
          "initialLevel": { "sum": 126, "count": 290 },
          "initialEval": 55,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 38,
          "lastModule": "Excellence",
          "topNRules": {
            "focused": [
              {
                "id": 7993,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 75
              },
              {
                "id": 4624,
                "name":
                  "« on a, on en, on y » ou « on n'a, on n'en, on n'y » ?",
                "difficultyLevel": 54
              },
              {
                "id": 8816,
                "name": "« négligent » et « négligence »",
                "difficultyLevel": 45
              },
              {
                "id": 8818,
                "name": "« fatigant » ou « fatiguant » ?",
                "difficultyLevel": 43
              },
              {
                "id": 8901,
                "name": "« vu » ou « vue » ?",
                "difficultyLevel": 35
              }
            ],
            "acquired": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 51
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 45
              },
              {
                "id": 4642,
                "name": "« des tuniques bleu foncé » ou « bleues foncées » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4729,
                "name": "« du » ou « dû » ?",
                "difficultyLevel": 20
              }
            ],
            "known": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 87
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 37
              },
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 16
              },
              {
                "id": 4625,
                "name":
                  "« ils sont debouts » ou « ils sont debout » ? « ils sont ensembles » ou « ils sont ensemble » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4730,
                "name":
                  "« apeller » ou « appeler » ? « rapelle » ou « rappelle » ?",
                "difficultyLevel": 11
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-05",
              "sumscore": 13.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-08",
              "sumscore": 36.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-25",
              "sumscore": 60.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-01",
              "sumscore": 69.94,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-28",
              "sumscore": 111.46,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-29",
              "sumscore": 144.74,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-02",
              "sumscore": 162.08,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-03",
              "sumscore": 217.44,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-01-04",
              "sumscore": 231.88,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-01-05",
              "sumscore": 250.28,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-01-06",
              "sumscore": 268.62,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-02-27",
              "sumscore": 282.94,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-04-01",
              "sumscore": 290.22,
              "moduleName": "Excellence"
            }
          ]
        },
        {
          "id": 3805228,
          "fullName": faker.name.findName(),
          "time": 216,
          "score": { "sum": 118, "count": 364 },
          "initialLevel": { "sum": 56, "count": 118 },
          "initialEval": 40,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 10,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 9
              },
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 8
              }
            ],
            "acquired": [
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 78
              },
              {
                "id": 4557,
                "name": "« notre » ou « nôtre » ? « votre » ou « vôtre » ?",
                "difficultyLevel": 40
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 26
              },
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 19
              }
            ],
            "known": [
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 34
              },
              {
                "id": 4610,
                "name": "« presque » ou « presqu' » ?",
                "difficultyLevel": 19
              },
              {
                "id": 3218,
                "name":
                  "« personel » ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 18
              },
              { "id": 4554, "name": "accent ou pas ?", "difficultyLevel": 17 },
              {
                "id": 4555,
                "name": "« si » ou « s'y » ?",
                "difficultyLevel": 15
              }
            ]
          },
          "progData": [
            {
              "date": "2019-01-05",
              "sumscore": 33.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-07",
              "sumscore": 47.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-10",
              "sumscore": 70.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 97.76,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805282,
          "fullName": faker.name.findName(),
          "time": 22,
          "score": { "sum": 106, "count": 364 },
          "initialLevel": { "sum": 44, "count": 106 },
          "initialEval": 31,
          "lastConnection": "2018-12-15",
          "connectionsNbr": 2,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 4
              }
            ],
            "acquired": [
              {
                "id": 4545,
                "name": "« connection » ou « connexion » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4557,
                "name": "« notre » ou « nôtre » ? « votre » ou « vôtre » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4552,
                "name": "« je peux » ou « je peut » ? ",
                "difficultyLevel": 3
              }
            ],
            "known": [
              {
                "id": 4542,
                "name": "« j'envoie » ou « j'envois » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4556,
                "name": "« est » ou « et » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4539,
                "name": "« ça », « çà » ou « sa » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4566,
                "name": "« en fesant » ou « en faisant » ? ",
                "difficultyLevel": 7
              },
              {
                "id": 4535,
                "name": "« avenir » ou « à venir » ?",
                "difficultyLevel": 6
              }
            ]
          },
          "progData": [
            {
              "date": "2018-12-14",
              "sumscore": 14.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-15",
              "sumscore": 27.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805219,
          "fullName": faker.name.findName(),
          "time": 48,
          "score": { "sum": 90, "count": 364 },
          "initialLevel": { "sum": 36, "count": 90 },
          "initialEval": 26,
          "lastConnection": "2019-01-06",
          "connectionsNbr": 5,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              { "id": 4538, "name": "« ou » ou « où » ?", "difficultyLevel": 5 }
            ],
            "acquired": [
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4549,
                "name": "« nous nous amusont » ou « nous nous amusons » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4573,
                "name": "« ni » ou « n'y » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4734,
                "name": "« un employé » ou « un employer » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4534,
                "name": "« son » ou « sont » ?",
                "difficultyLevel": 3
              }
            ],
            "known": [
              {
                "id": 4565,
                "name": "« mieu » ou « mieux » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 4
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 3
              }
            ]
          },
          "progData": [
            { "date": "2019-01-02", "sumscore": 14.0, "moduleName": "Pro" },
            { "date": "2019-01-06", "sumscore": 27.0, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805281,
          "fullName": faker.name.findName(),
          "time": 108,
          "score": { "sum": 116, "count": 364 },
          "initialLevel": { "sum": 39, "count": 116 },
          "initialEval": 28,
          "lastConnection": "2019-01-06",
          "connectionsNbr": 21,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 28
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 14
              },
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4627,
                "name": "« un » ou « une » espèce de ?",
                "difficultyLevel": 1
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 1
              }
            ],
            "acquired": [
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 66
              },
              {
                "id": 4577,
                "name": "« un envoie » ou « un envoi » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4569,
                "name": "« tous les » ou « tout les » ?",
                "difficultyLevel": 16
              },
              {
                "id": 3218,
                "name":
                  "« personel ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4596,
                "name": "« langage » ou « language » ?",
                "difficultyLevel": 14
              }
            ],
            "known": [
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4582,
                "name": "« c'est » ou « s'est » ? « ce sont » ou « se sont » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4548,
                "name": "« je le savais » ou « je le savait » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4549,
                "name": "« nous nous amusont » ou « nous nous amusons » ?",
                "difficultyLevel": 15
              }
            ]
          },
          "progData": [
            { "date": "2018-11-25", "sumscore": 12.0, "moduleName": "Pro" },
            { "date": "2018-12-26", "sumscore": 29.0, "moduleName": "Pro" },
            { "date": "2018-12-29", "sumscore": 43.0, "moduleName": "Pro" },
            { "date": "2019-01-06", "sumscore": 73.64, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805220,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 55, "count": 364 },
          "initialLevel": { "sum": 17, "count": 55 },
          "initialEval": 12,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805284,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 112, "count": 364 },
          "initialLevel": { "sum": 92, "count": 112 },
          "initialEval": 66,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805285,
          "fullName": faker.name.findName(),
          "time": 81,
          "score": { "sum": 99, "count": 364 },
          "initialLevel": { "sum": 66, "count": 99 },
          "initialEval": 47,
          "lastConnection": "2019-01-14",
          "connectionsNbr": 7,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 11
              },
              {
                "id": 4609,
                "name": "« voir » ou « voire » ?",
                "difficultyLevel": 10
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 6
              }
            ],
            "acquired": [
              {
                "id": 4600,
                "name": "« entretien » ou « entretient » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4610,
                "name": "« presque » ou « presqu' » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4596,
                "name": "« langage » ou « language » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4573,
                "name": "« ni » ou « n'y » ?",
                "difficultyLevel": 6
              },
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 6
              }
            ],
            "known": [
              { "id": 4537, "name": "« a » ou « à » ?", "difficultyLevel": 14 },
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4553,
                "name": "« il travail » ou « il travaille » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 7
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-31",
              "sumscore": 69.52,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-14",
              "sumscore": 83.03999,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805274,
          "fullName": faker.name.findName(),
          "time": 406,
          "score": { "sum": 140, "count": 364 },
          "initialLevel": { "sum": 47, "count": 140 },
          "initialEval": 34,
          "lastConnection": "2019-03-11",
          "connectionsNbr": 25,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 78
              },
              {
                "id": 4659,
                "name": "« lorsque » ou « lorsqu' »",
                "difficultyLevel": 47
              },
              {
                "id": 4635,
                "name": "« quelque » ou « quel que » ?",
                "difficultyLevel": 43
              },
              {
                "id": 4624,
                "name":
                  "« on a, on en, on y » ou « on n'a, on n'en, on n'y » ?",
                "difficultyLevel": 39
              },
              {
                "id": 4604,
                "name": "« -euil » ou « -ueil » ?",
                "difficultyLevel": 38
              }
            ],
            "known": [
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 54
              },
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 41
              },
              {
                "id": 4729,
                "name": "« du » ou « dû » ?",
                "difficultyLevel": 34
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 31
              },
              {
                "id": 4625,
                "name":
                  "« ils sont debouts » ou « ils sont debout » ? « ils sont ensembles » ou « ils sont ensemble » ?",
                "difficultyLevel": 27
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-05",
              "sumscore": 9.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-24",
              "sumscore": 23.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-09",
              "sumscore": 27.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-13",
              "sumscore": 47.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-16",
              "sumscore": 54.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-26",
              "sumscore": 56.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-27",
              "sumscore": 63.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-30",
              "sumscore": 64.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-02",
              "sumscore": 74.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-03",
              "sumscore": 95.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-03",
              "sumscore": 110.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-11",
              "sumscore": 140.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805278,
          "fullName": faker.name.findName(),
          "time": 143,
          "score": { "sum": 131, "count": 364 },
          "initialLevel": { "sum": 82, "count": 131 },
          "initialEval": 59,
          "lastConnection": "2019-03-31",
          "connectionsNbr": 16,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 8
              },
              {
                "id": 4739,
                "name": "« vingt » ou « vingts » ?",
                "difficultyLevel": 8
              },
              {
                "id": 4635,
                "name": "« quelque » ou « quel que » ?",
                "difficultyLevel": 6
              }
            ],
            "acquired": [
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 30
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 25
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4642,
                "name": "« des tuniques bleu foncé » ou « bleues foncées » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4641,
                "name": "« des nuages blanc » ou « des nuages blancs » ?",
                "difficultyLevel": 22
              }
            ],
            "known": [
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 32
              },
              {
                "id": 4610,
                "name": "« presque » ou « presqu' » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 15
              },
              {
                "id": 3218,
                "name":
                  "« personel » ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4547,
                "name": "« on » ou « ont » ?",
                "difficultyLevel": 13
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-25",
              "sumscore": 8.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-06",
              "sumscore": 49.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-25",
              "sumscore": 62.88,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-26",
              "sumscore": 73.880005,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-31",
              "sumscore": 131.40001,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805276,
          "fullName": faker.name.findName(),
          "time": 7,
          "score": { "sum": 68, "count": 364 },
          "initialLevel": { "sum": 39, "count": 68 },
          "initialEval": 28,
          "lastConnection": "2018-10-28",
          "connectionsNbr": 1,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4565,
                "name": "« mieu » ou « mieux » ?",
                "difficultyLevel": 2
              },
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 2
              }
            ],
            "known": [
              {
                "id": 4548,
                "name": "« je le savais » ou « je le savait » ?",
                "difficultyLevel": 2
              },
              {
                "id": 4552,
                "name": "« je peux » ou « je peut » ?",
                "difficultyLevel": 2
              },
              {
                "id": 4556,
                "name": "« est » ou « et » ?",
                "difficultyLevel": 2
              },
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4566,
                "name": "« en fesant » ou « en faisant » ?",
                "difficultyLevel": 1
              }
            ]
          },
          "progData": [
            { "date": "2018-10-28", "sumscore": 7.0, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805267,
          "fullName": faker.name.findName(),
          "time": 685,
          "score": { "sum": 237, "count": 364 },
          "initialLevel": { "sum": 87, "count": 237 },
          "initialEval": 43,
          "lastConnection": "2019-04-02",
          "connectionsNbr": 45,
          "lastModule": "Excellence",
          "topNRules": {
            "focused": [
              {
                "id": 8855,
                "name": "« les joueurs se jettent à l'envi sur la balle »",
                "difficultyLevel": 52
              },
              {
                "id": 8848,
                "name": "« merci pour » ou « merci de » ?",
                "difficultyLevel": 43
              },
              {
                "id": 8857,
                "name": "« céans », « séant » ou « seyant » ?",
                "difficultyLevel": 43
              },
              {
                "id": 8860,
                "name": "« hypo- » ou « hippo- » ?",
                "difficultyLevel": 41
              },
              {
                "id": 8887,
                "name": "« initier une personne » mais « lancer un projet »",
                "difficultyLevel": 40
              }
            ],
            "acquired": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 191
              },
              {
                "id": 7993,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 112
              },
              {
                "id": 7978,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 75
              },
              {
                "id": 4657,
                "name": "« à l'attention de » ou « à l'intention de » ?",
                "difficultyLevel": 70
              },
              {
                "id": 7984,
                "name":
                  "L'usage ou non de la virgule autour des propositions relatives",
                "difficultyLevel": 69
              }
            ],
            "known": [
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 41
              },
              {
                "id": 4662,
                "name": "« j'ai été » ou « je suis allé » ?",
                "difficultyLevel": 40
              },
              {
                "id": 4610,
                "name": "« presque » ou « presqu' » ?",
                "difficultyLevel": 39
              },
              {
                "id": 4652,
                "name":
                  "« pallier quelque chose » ou « pallier à quelque chose » ?",
                "difficultyLevel": 32
              },
              {
                "id": 4620,
                "name": "« fond » ou « fonds » ?",
                "difficultyLevel": 30
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-18",
              "sumscore": 63.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-06",
              "sumscore": 76.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-08",
              "sumscore": 85.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-13",
              "sumscore": 89.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-15",
              "sumscore": 123.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-18",
              "sumscore": 140.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-02-17",
              "sumscore": 147.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-03-03",
              "sumscore": 149.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-03-10",
              "sumscore": 150.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-03-12",
              "sumscore": 155.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-03-15",
              "sumscore": 164.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-03-17",
              "sumscore": 222.12,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-03-18",
              "sumscore": 236.68,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-04-02",
              "sumscore": 237.68,
              "moduleName": "Excellence"
            }
          ]
        },
        {
          "id": 3805265,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 80, "count": 364 },
          "initialLevel": { "sum": 46, "count": 80 },
          "initialEval": 33,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805270,
          "fullName": faker.name.findName(),
          "time": 444,
          "score": { "sum": 137, "count": 364 },
          "initialLevel": { "sum": 50, "count": 137 },
          "initialEval": 36,
          "lastConnection": "2019-03-08",
          "connectionsNbr": 17,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 102
              },
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 52
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 34
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4641,
                "name": "« des nuages blanc » ou « des nuages blancs » ?",
                "difficultyLevel": 22
              }
            ],
            "acquired": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 90
              },
              {
                "id": 4729,
                "name": "« du » ou « dû » ?",
                "difficultyLevel": 65
              },
              {
                "id": 4623,
                "name": "« quoique » ou « quoi que » ?",
                "difficultyLevel": 59
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 46
              },
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 37
              }
            ],
            "known": [
              {
                "id": 4613,
                "name": "« ci-joint » ou « ci-jointe » ?",
                "difficultyLevel": 41
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 40
              },
              {
                "id": 4638,
                "name": "« -ions » ou « -iions » ? « -iez » ou « -iiez » ?",
                "difficultyLevel": 29
              },
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 20
              }
            ]
          },
          "progData": [
            {
              "date": "2019-01-06",
              "sumscore": 24.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-07",
              "sumscore": 38.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-04",
              "sumscore": 88.86,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-08",
              "sumscore": 137.84,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805268,
          "fullName": faker.name.findName(),
          "time": 61,
          "score": { "sum": 115, "count": 364 },
          "initialLevel": { "sum": 80, "count": 115 },
          "initialEval": 57,
          "lastConnection": "2019-01-07",
          "connectionsNbr": 8,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4627,
                "name": "« un » ou « une » espèce de ?",
                "difficultyLevel": 1
              },
              { "id": 4729, "name": "« du » ou « dû » ?", "difficultyLevel": 1 }
            ],
            "acquired": [
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 30
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4596,
                "name": "« langage » ou « language » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4590,
                "name":
                  "« Est-ce que le repas est-il prêt ? » ou « Est-ce que le repas est prêt » ? ",
                "difficultyLevel": 15
              },
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 13
              }
            ],
            "known": [
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4533,
                "name": "participe passé conjugué avec l'auxiliaire « être »",
                "difficultyLevel": 18
              },
              {
                "id": 4557,
                "name": "« notre » ou « nôtre » ? « votre » ou « vôtre » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4572,
                "name": "« la plupart est » ou « la plupart sont » ?",
                "difficultyLevel": 13
              }
            ]
          },
          "progData": [
            {
              "date": "2019-01-06",
              "sumscore": 56.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-07",
              "sumscore": 91.76,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805262,
          "fullName": faker.name.findName(),
          "time": 614,
          "score": { "sum": 138, "count": 364 },
          "initialLevel": { "sum": 30, "count": 138 },
          "initialEval": 21,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 49,
          "lastModule": "Pont supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 110
              },
              {
                "id": 4738,
                "name": "« cent » ou « cents » ?",
                "difficultyLevel": 80
              },
              {
                "id": 4739,
                "name": "« vingt » ou « vingts » ?",
                "difficultyLevel": 56
              },
              {
                "id": 4642,
                "name": "« des tuniques bleu foncé » ou « bleues foncées » ?",
                "difficultyLevel": 51
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 32
              }
            ],
            "acquired": [
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 155
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 93
              },
              {
                "id": 4578,
                "name": "« qu'il ait » ou « qu'il est » ?",
                "difficultyLevel": 92
              },
              {
                "id": 4657,
                "name": "« à l'attention de » ou « à l'intention de » ?",
                "difficultyLevel": 73
              },
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 62
              }
            ],
            "known": [
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 86
              },
              {
                "id": 4624,
                "name":
                  "« on a, on en, on y » ou « on n'a, on n'en, on n'y » ?",
                "difficultyLevel": 67
              },
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 61
              },
              {
                "id": 3218,
                "name":
                  "« personel ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4547,
                "name": "« on » ou « ont » ?",
                "difficultyLevel": 25
              }
            ]
          },
          "progData": [
            { "date": "2018-11-18", "sumscore": 7.0, "moduleName": "Pro" },
            { "date": "2018-11-19", "sumscore": 14.0, "moduleName": "Pro" },
            { "date": "2018-11-21", "sumscore": 23.0, "moduleName": "Pro" },
            { "date": "2018-11-27", "sumscore": 30.0, "moduleName": "Pro" },
            { "date": "2018-11-30", "sumscore": 33.0, "moduleName": "Pro" },
            { "date": "2018-12-29", "sumscore": 50.0, "moduleName": "Pro" },
            { "date": "2018-12-31", "sumscore": 51.0, "moduleName": "Pro" },
            { "date": "2019-01-05", "sumscore": 63.0, "moduleName": "Pro" },
            { "date": "2019-01-17", "sumscore": 84.0, "moduleName": "Pro" },
            {
              "date": "2019-01-24",
              "sumscore": 87.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-01-29",
              "sumscore": 90.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-02-26",
              "sumscore": 92.0,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-03-26",
              "sumscore": 113.88,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-03-28",
              "sumscore": 125.46,
              "moduleName": "Pont supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 138.34,
              "moduleName": "Pont supérieur"
            }
          ]
        },
        {
          "id": 4218940,
          "fullName": faker.name.findName(),
          "time": 63,
          "score": { "sum": 115, "count": 364 },
          "initialLevel": { "sum": 88, "count": 115 },
          "initialEval": 63,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 8,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4562,
                "name": "« ces » ou « ses » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4600,
                "name": "« entretien » ou « entretient » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4572,
                "name": "« la plupart est » ou « la plupart sont » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 9
              },
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 7
              }
            ],
            "known": [
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4588,
                "name": "« il se détend » ou « il se détent » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4610,
                "name": "« presque » ou « presqu' » ?",
                "difficultyLevel": 9
              }
            ]
          },
          "progData": [
            {
              "date": "2019-03-11",
              "sumscore": 14.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-13",
              "sumscore": 28.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 70.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 4218942,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 82, "count": 364 },
          "initialLevel": { "sum": 68, "count": 82 },
          "initialEval": 49,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        }
      ],
      "insights": {
        "lastWeek": {
          "time": { "sum": 2, "sumd": -4 },
          "score": { "sum": 3, "sumd": -7 },
          "activeUsers": { "sum": 3, "sumd": -7 },
          "inactiveUsers": { "sum": 26, "sumd": 7 },
          "connections": [
            { "count": 4, "date": "2019-04-02" },
            { "count": 6, "date": "2019-04-03" },
            { "count": 2, "date": "2019-04-04" },
            { "count": 4, "date": "2019-04-05" },
            { "count": 0, "date": "2019-04-06" },
            { "count": 0, "date": "2019-04-07" },
            { "count": 0, "date": "2019-04-08" }
          ],
          "topNRules": {
            "focused": [
              {
                "id": 4210,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 110
              },
              {
                "id": 3062,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 100
              },
              {
                "id": 4191,
                "name": "« cent » ou « cents » ?",
                "difficultyLevel": 80
              },
              {
                "id": 8194,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 75
              },
              {
                "id": 3012,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 69
              }
            ],
            "acquired": [
              {
                "id": 3538,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 117
              },
              {
                "id": 8194,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 112
              },
              {
                "id": 3555,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 93
              },
              {
                "id": 3502,
                "name": "« qu'il ait » ou « qu'il est » ?",
                "difficultyLevel": 92
              },
              {
                "id": 8195,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 75
              }
            ],
            "known": [
              {
                "id": 3109,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 87
              },
              {
                "id": 3098,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 74
              },
              {
                "id": 3549,
                "name":
                  "« on a, on en, on y » ou « on n'a, on n'en, on n'y » ?",
                "difficultyLevel": 67
              },
              {
                "id": 3108,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 40
              },
              {
                "id": 3127,
                "name": "« j'ai été » ou « je suis allé » ?",
                "difficultyLevel": 40
              }
            ]
          },
          "topNUsers": {
            "score": [
              { "id": 3805235, "sum": { "sum": 50, "sumd": 37 } },
              { "id": 3805294, "sum": { "sum": 34, "sumd": 34 } },
              { "id": 3805267, "sum": { "sum": 0, "sumd": 0 } }
            ],
            "time": [
              { "id": 3805235, "sum": { "sum": 91, "sumd": 20 } },
              { "id": 3805294, "sum": { "sum": 45, "sumd": 45 } },
              { "id": 3805267, "sum": { "sum": 1, "sumd": 1 } },
              { "id": 3805219, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805220, "sum": { "sum": 0, "sumd": 0 } }
            ],
            "help": [
              { "id": 3805235, "sum": { "sum": 17, "sumd": 12 } },
              { "id": 3805294, "sum": { "sum": 6, "sumd": 6 } },
              { "id": 3805267, "sum": { "sum": 4, "sumd": 4 } }
            ],
            "dropout": [
              { "id": 3805224, "sum": { "sum": 0, "sumd": -3 } },
              { "id": 3805295, "sum": { "sum": 0, "sumd": -30 } },
              { "id": 3805219, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805220, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805268, "sum": { "sum": 0, "sumd": 0 } }
            ]
          }
        },
        "lastMonth": {
          "time": { "sum": 11, "sumd": 5 },
          "score": { "sum": 21, "sumd": 15 },
          "activeUsers": { "sum": 9, "sumd": 7 },
          "inactiveUsers": { "sum": 20, "sumd": -7 },
          "connections": [
            { "count": 4, "date": "2019-03-10" },
            { "count": 6, "date": "2019-03-11" },
            { "count": 1, "date": "2019-03-12" },
            { "count": 2, "date": "2019-03-13" },
            { "count": 0, "date": "2019-03-14" },
            { "count": 3, "date": "2019-03-15" },
            { "count": 0, "date": "2019-03-16" },
            { "count": 4, "date": "2019-03-17" },
            { "count": 4, "date": "2019-03-18" },
            { "count": 0, "date": "2019-03-19" },
            { "count": 0, "date": "2019-03-20" },
            { "count": 0, "date": "2019-03-21" },
            { "count": 0, "date": "2019-03-22" },
            { "count": 0, "date": "2019-03-23" },
            { "count": 0, "date": "2019-03-24" },
            { "count": 3, "date": "2019-03-25" },
            { "count": 5, "date": "2019-03-26" },
            { "count": 0, "date": "2019-03-27" },
            { "count": 3, "date": "2019-03-28" },
            { "count": 0, "date": "2019-03-29" },
            { "count": 0, "date": "2019-03-30" },
            { "count": 5, "date": "2019-03-31" },
            { "count": 22, "date": "2019-04-01" },
            { "count": 4, "date": "2019-04-02" },
            { "count": 6, "date": "2019-04-03" },
            { "count": 2, "date": "2019-04-04" },
            { "count": 4, "date": "2019-04-05" },
            { "count": 0, "date": "2019-04-06" },
            { "count": 0, "date": "2019-04-07" },
            { "count": 0, "date": "2019-04-08" }
          ],
          "topNRules": {
            "focused": [
              {
                "id": 4210,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 110
              },
              {
                "id": 3062,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 100
              },
              {
                "id": 4191,
                "name": "« cent » ou « cents » ?",
                "difficultyLevel": 80
              },
              {
                "id": 8194,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 75
              },
              {
                "id": 3012,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 69
              }
            ],
            "acquired": [
              {
                "id": 3538,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 117
              },
              {
                "id": 8194,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 112
              },
              {
                "id": 3555,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 93
              },
              {
                "id": 3502,
                "name": "« qu'il ait » ou « qu'il est » ?",
                "difficultyLevel": 92
              },
              {
                "id": 8195,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 75
              }
            ],
            "known": [
              {
                "id": 3109,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 87
              },
              {
                "id": 3098,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 74
              },
              {
                "id": 3549,
                "name":
                  "« on a, on en, on y » ou « on n'a, on n'en, on n'y » ?",
                "difficultyLevel": 67
              },
              {
                "id": 3108,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 40
              },
              {
                "id": 3127,
                "name": "« j'ai été » ou « je suis allé » ?",
                "difficultyLevel": 40
              }
            ]
          },
          "topNUsers": {
            "score": [
              { "id": 3805267, "sum": { "sum": 89, "sumd": 81 } },
              { "id": 3805278, "sum": { "sum": 82, "sumd": 82 } },
              { "id": 4218940, "sum": { "sum": 70, "sumd": 70 } },
              { "id": 3805235, "sum": { "sum": 63, "sumd": 63 } },
              { "id": 3805237, "sum": { "sum": 56, "sumd": 56 } }
            ],
            "time": [
              { "id": 3805267, "sum": { "sum": 171, "sumd": 109 } },
              { "id": 3805235, "sum": { "sum": 162, "sumd": 162 } },
              { "id": 3805262, "sum": { "sum": 110, "sumd": 34 } },
              { "id": 3805278, "sum": { "sum": 95, "sumd": 95 } },
              { "id": 3805227, "sum": { "sum": 77, "sumd": 77 } }
            ],
            "help": [
              { "id": 3805224, "sum": { "sum": 39, "sumd": 39 } },
              { "id": 3805274, "sum": { "sum": 27, "sumd": 1 } },
              { "id": 3805262, "sum": { "sum": 20, "sumd": 17 } },
              { "id": 3805295, "sum": { "sum": 16, "sumd": 4 } },
              { "id": 3805267, "sum": { "sum": 16, "sumd": 10 } }
            ],
            "dropout": [
              { "id": 3805276, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805219, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805270, "sum": { "sum": 0, "sumd": -302 } },
              { "id": 3805220, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805268, "sum": { "sum": 0, "sumd": 0 } }
            ]
          }
        }
      },
      "modules": [
        {
          "key": "Pro",
          "index": 0,
          "nbrOfRules": 84,
          "routeId": 62,
          "productId": 55
        },
        {
          "key": "Pont supérieur",
          "index": 1,
          "nbrOfRules": 56,
          "routeId": 62,
          "productId": 56
        },
        {
          "key": "Orthotypographie",
          "index": 2,
          "nbrOfRules": 24,
          "routeId": 62,
          "productId": 57
        },
        {
          "key": "Excellence",
          "index": 3,
          "nbrOfRules": 200,
          "routeId": 62,
          "productId": 71
        },
        {
          "key": "Supérieur",
          "index": 0,
          "nbrOfRules": 140,
          "routeId": 68,
          "productId": 53
        },
        {
          "key": "Orthotypographie",
          "index": 2,
          "nbrOfRules": 24,
          "routeId": 68,
          "productId": 57
        },
        {
          "key": "Excellence",
          "index": 3,
          "nbrOfRules": 200,
          "routeId": 68,
          "productId": 71
        }
      ],
      "evaluations": [
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805219,
          "mark": null,
          "score": 26,
          "time": 41.3167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805219,
          "mark": 4.0,
          "score": 34,
          "time": 49.1667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805219,
          "mark": 4.5,
          "score": 37,
          "time": 40.1333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805219,
          "mark": 5.0,
          "score": 39,
          "time": 43.35
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805220,
          "mark": null,
          "score": 12,
          "time": 55.7833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805220,
          "mark": 1.5,
          "score": 15,
          "time": 23.6167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805220,
          "mark": 3.5,
          "score": 26,
          "time": 49.45
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805224,
          "mark": null,
          "score": 21,
          "time": 55.9833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805224,
          "mark": 4.5,
          "score": 31,
          "time": 46.9167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805224,
          "mark": 8.0,
          "score": 55,
          "time": 42.1333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805227,
          "mark": null,
          "score": 36,
          "time": 51.2833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805227,
          "mark": 9.5,
          "score": 57,
          "time": 45.1167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805227,
          "mark": 10.0,
          "score": 59,
          "time": 51.4167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805227,
          "mark": 10.0,
          "score": 55,
          "time": 45.2167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805228,
          "mark": null,
          "score": 40,
          "time": 47.1
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805228,
          "mark": 4.5,
          "score": 41,
          "time": 39.15
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805228,
          "mark": 9.0,
          "score": 64,
          "time": 54.3667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805230,
          "mark": null,
          "score": 29,
          "time": 54.9667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805230,
          "mark": 4.0,
          "score": 35,
          "time": 43.6167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805230,
          "mark": 7.5,
          "score": 53,
          "time": 53.5167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805230,
          "mark": 3.5,
          "score": 29,
          "time": 54.8
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805235,
          "mark": null,
          "score": 44,
          "time": 49.9667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805235,
          "mark": 3.5,
          "score": 33,
          "time": 23.6
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805235,
          "mark": 4.0,
          "score": 39,
          "time": 18.1833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805237,
          "mark": null,
          "score": 49,
          "time": 46.1333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805237,
          "mark": 4.5,
          "score": 47,
          "time": 44.0167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805237,
          "mark": 4.5,
          "score": 46,
          "time": 42.65
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805237,
          "mark": 7.0,
          "score": 58,
          "time": 46.4333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805242,
          "mark": null,
          "score": 24,
          "time": 46.6833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805242,
          "mark": 3.0,
          "score": 30,
          "time": 40.4
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805242,
          "mark": 2.0,
          "score": 11,
          "time": 10.9167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805242,
          "mark": 3.5,
          "score": 29,
          "time": 44.4833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805262,
          "mark": null,
          "score": 21,
          "time": 18.05
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805262,
          "mark": 9.0,
          "score": 51,
          "time": 34.6167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805262,
          "mark": 9.0,
          "score": 41,
          "time": 25.8
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805262,
          "mark": 12.5,
          "score": 51,
          "time": 24.2
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805265,
          "mark": null,
          "score": 33,
          "time": 40.1667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805265,
          "mark": 3.0,
          "score": 32,
          "time": 44.0833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805267,
          "mark": null,
          "score": 43,
          "time": 24.3833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805267,
          "mark": 13.5,
          "score": 76,
          "time": 30.5167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805267,
          "mark": 5.0,
          "score": 0,
          "time": 2.2833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805267,
          "mark": 15.5,
          "score": 76,
          "time": 26.8
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805268,
          "mark": null,
          "score": 57,
          "time": 28.1
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805268,
          "mark": 6.5,
          "score": 61,
          "time": 24.0667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805268,
          "mark": 5.0,
          "score": 46,
          "time": 26.9667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805270,
          "mark": null,
          "score": 36,
          "time": 49.6167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805270,
          "mark": 6.5,
          "score": 50,
          "time": 36.8333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805270,
          "mark": 11.0,
          "score": 58,
          "time": 47.7833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805274,
          "mark": null,
          "score": 34,
          "time": 42.9333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805274,
          "mark": 11.0,
          "score": 65,
          "time": 46.4667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805274,
          "mark": 10.0,
          "score": 59,
          "time": 42.7667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805274,
          "mark": 10.5,
          "score": 58,
          "time": 41.9833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805276,
          "mark": null,
          "score": 28,
          "time": 36.5333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805276,
          "mark": 2.5,
          "score": 24,
          "time": 34.7833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805276,
          "mark": 2.5,
          "score": 22,
          "time": 46.4833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805278,
          "mark": null,
          "score": 59,
          "time": 29.5
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805278,
          "mark": 5.5,
          "score": 59,
          "time": 35.0333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805278,
          "mark": 6.5,
          "score": 62,
          "time": 29.3333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805278,
          "mark": 10.0,
          "score": 76,
          "time": 31.35
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805281,
          "mark": null,
          "score": 28,
          "time": 33.9
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805281,
          "mark": 7.0,
          "score": 53,
          "time": 46.8
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805281,
          "mark": 8.5,
          "score": 59,
          "time": 40.6833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805281,
          "mark": 8.0,
          "score": 54,
          "time": 33.4667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805282,
          "mark": null,
          "score": 31,
          "time": 27.35
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805282,
          "mark": 5.5,
          "score": 46,
          "time": 47.75
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805282,
          "mark": 5.0,
          "score": 41,
          "time": 25.4
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805282,
          "mark": 4.5,
          "score": 36,
          "time": 28.75
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805284,
          "mark": null,
          "score": 66,
          "time": 33.2667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805284,
          "mark": 5.5,
          "score": 60,
          "time": 35.0667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805284,
          "mark": 6.0,
          "score": 61,
          "time": 24.9167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805285,
          "mark": null,
          "score": 47,
          "time": 25.65
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805285,
          "mark": 5.5,
          "score": 51,
          "time": 23.5833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805289,
          "mark": null,
          "score": 41,
          "time": 46.7333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805289,
          "mark": 6.5,
          "score": 51,
          "time": 31.1333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805289,
          "mark": 9.0,
          "score": 64,
          "time": 37.5333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805289,
          "mark": 7.5,
          "score": 54,
          "time": 33.0333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805294,
          "mark": null,
          "score": 24,
          "time": 49.7667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805294,
          "mark": 3.5,
          "score": 31,
          "time": 51.6167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805295,
          "mark": null,
          "score": 55,
          "time": 53.5167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805295,
          "mark": 8.5,
          "score": 55,
          "time": 47.8167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805295,
          "mark": 11.0,
          "score": 64,
          "time": 42.65
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805295,
          "mark": 10.5,
          "score": 60,
          "time": 45.4667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805297,
          "mark": null,
          "score": 27,
          "time": 40.2
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805297,
          "mark": 7.0,
          "score": 46,
          "time": 47.8667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805297,
          "mark": 6.5,
          "score": 43,
          "time": 51.8833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805297,
          "mark": 6.0,
          "score": 37,
          "time": 38.7
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805298,
          "mark": null,
          "score": 66,
          "time": 48.0667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805298,
          "mark": 5.5,
          "score": 59,
          "time": 47.8
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805298,
          "mark": 6.0,
          "score": 64,
          "time": 46.3833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 4218940,
          "mark": null,
          "score": 63,
          "time": 55.8667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 4218940,
          "mark": 7.0,
          "score": 67,
          "time": 45.6167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 4218942,
          "mark": null,
          "score": 49,
          "time": 41.1833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 4218942,
          "mark": 4.0,
          "score": 41,
          "time": 36.1667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 4218944,
          "mark": null,
          "score": 35,
          "time": 42.1833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 4218944,
          "mark": 3.0,
          "score": 29,
          "time": 35.8833
        }
      ]
    },
    {
      "id": 82126,
      "users": [
        {
          "id": 3805243,
          "fullName": faker.name.findName(),
          "time": 166,
          "score": { "sum": 127, "count": 364 },
          "initialLevel": { "sum": 77, "count": 127 },
          "initialEval": 55,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 15,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4595,
                "name":
                  "« elle s'est fait faire » ou « elle s'est faite faire » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4623,
                "name": "« quoique » ou « quoi que » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4649,
                "name": "« acompte » ou « accompte » ?",
                "difficultyLevel": 9
              },
              {
                "id": 4587,
                "name": "« huit heure » ou « huit heures » ?",
                "difficultyLevel": 1
              }
            ],
            "acquired": [
              {
                "id": 4642,
                "name": "« des tuniques bleu foncé » ou « bleues foncées » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4601,
                "name":
                  "« magazin » ou « magasin » ? « magasine » ou « magazine » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4625,
                "name":
                  "« ils sont debouts » ou « ils sont debout » ? « ils sont ensembles » ou « ils sont ensemble » ?",
                "difficultyLevel": 16
              }
            ],
            "known": [
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 36
              },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4729,
                "name": "« du » ou « dû » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 19
              },
              {
                "id": 3218,
                "name":
                  "« personel » ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 17
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-19",
              "sumscore": 37.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-20",
              "sumscore": 48.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-21",
              "sumscore": 72.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-04",
              "sumscore": 85.76,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-11",
              "sumscore": 98.64,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 119.64,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805240,
          "fullName": faker.name.findName(),
          "time": 341,
          "score": { "sum": 191, "count": 364 },
          "initialLevel": { "sum": 78, "count": 191 },
          "initialEval": 45,
          "lastConnection": "2019-01-05",
          "connectionsNbr": 31,
          "lastModule": "Excellence",
          "topNRules": {
            "focused": [
              {
                "id": 7978,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 32
              },
              {
                "id": 7972,
                "name": "Majuscule ou minuscule après le deux-points",
                "difficultyLevel": 17
              },
              {
                "id": 7976,
                "name":
                  "Guillemets : point avant ou après le guillemet fermant",
                "difficultyLevel": 17
              },
              {
                "id": 7990,
                "name": "Guillemets : français, anglais, droits",
                "difficultyLevel": 17
              },
              {
                "id": 8832,
                "name": "« agonir » ou « agoniser » ?",
                "difficultyLevel": 15
              }
            ],
            "acquired": [
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 68
              },
              {
                "id": 4653,
                "name": "« bimensuel » ou « bimestriel » ?",
                "difficultyLevel": 46
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 34
              },
              {
                "id": 4572,
                "name": "« la plupart est » ou « la plupart sont » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4663,
                "name": "« tout énervée » ou « toute énervée » ?",
                "difficultyLevel": 30
              }
            ],
            "known": [
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 39
              },
              {
                "id": 4640,
                "name": "« parti » ou « partie » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4583,
                "name": "«  tu tries » ou « tu tris » ? ",
                "difficultyLevel": 25
              },
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 25
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-22",
              "sumscore": 18.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-28",
              "sumscore": 33.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-18",
              "sumscore": 48.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-21",
              "sumscore": 53.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-27",
              "sumscore": 61.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-28",
              "sumscore": 64.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-06",
              "sumscore": 78.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-12",
              "sumscore": 83.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-23",
              "sumscore": 89.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-24",
              "sumscore": 105.52,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2018-12-26",
              "sumscore": 116.439995,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2018-12-27",
              "sumscore": 151.08,
              "moduleName": "Excellence"
            },
            {
              "date": "2018-12-28",
              "sumscore": 181.08,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-05",
              "sumscore": 191.08,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805241,
          "fullName": faker.name.findName(),
          "time": 2,
          "score": { "sum": 111, "count": 364 },
          "initialLevel": { "sum": 66, "count": 111 },
          "initialEval": 47,
          "lastConnection": "2019-03-03",
          "connectionsNbr": 2,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4540,
                "name": "« dans » ou « d'en » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4542,
                "name": "« j'envoie » ou « j'envois » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4550,
                "name":
                  "« tu mange » ou « tu manges » ? « tu mangera » ou « tu mangeras » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 1
              }
            ],
            "known": [
              {
                "id": 4535,
                "name": "« avenir » ou « à venir » ?",
                "difficultyLevel": 2
              },
              {
                "id": 4566,
                "name": "« en fesant » ou « en faisant » ? ",
                "difficultyLevel": 2
              },
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4539,
                "name": "« ça », « çà » ou « sa » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4545,
                "name": "« connection » ou « connexion » ?",
                "difficultyLevel": 1
              }
            ]
          },
          "progData": [
            {
              "date": "2019-03-03",
              "sumscore": 14.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805245,
          "fullName": faker.name.findName(),
          "time": 420,
          "score": { "sum": 163, "count": 364 },
          "initialLevel": { "sum": 63, "count": 163 },
          "initialEval": 39,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 30,
          "lastModule": "Orthotypographie",
          "topNRules": {
            "focused": [
              {
                "id": 7978,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 57
              },
              {
                "id": 7993,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 44
              },
              {
                "id": 7987,
                "name": "La révolution de 1789 ou la Révolution",
                "difficultyLevel": 34
              },
              {
                "id": 7976,
                "name":
                  "Guillemets : point avant ou après le guillemet fermant",
                "difficultyLevel": 32
              },
              {
                "id": 7984,
                "name":
                  "L'usage ou non de la virgule autour des propositions relatives",
                "difficultyLevel": 23
              }
            ],
            "acquired": [
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 52
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 45
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 40
              },
              {
                "id": 4659,
                "name": "« lorsque » ou « lorsqu' »",
                "difficultyLevel": 40
              },
              {
                "id": 4661,
                "name": "du bon usage de « s'avérer »",
                "difficultyLevel": 40
              }
            ],
            "known": [
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 61
              },
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4612,
                "name":
                  "« ce faisant » ou « se faisant » ? « pour ce faire » ou « pour se faire » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4601,
                "name":
                  "« magazin » ou « magasin » ? « magasine » ou « magazine » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4622,
                "name":
                  "« exigeant » ou « exigent » ? « exigeance » ou « exigence » ?",
                "difficultyLevel": 15
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-23",
              "sumscore": 10.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-19",
              "sumscore": 52.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-20",
              "sumscore": 60.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-21",
              "sumscore": 88.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-27",
              "sumscore": 110.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-16",
              "sumscore": 125.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-17",
              "sumscore": 140.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-07",
              "sumscore": 148.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-04-01",
              "sumscore": 163.34,
              "moduleName": "Orthotypographie"
            }
          ]
        },
        {
          "id": 3805296,
          "fullName": faker.name.findName(),
          "time": 151,
          "score": { "sum": 111, "count": 364 },
          "initialLevel": { "sum": 45, "count": 111 },
          "initialEval": 32,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 9,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 33
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 19
              },
              {
                "id": 4580,
                "name": "« hors » ou « or » ?",
                "difficultyLevel": 9
              },
              {
                "id": 4583,
                "name": "«  tu tries » ou « tu tris » ? ",
                "difficultyLevel": 8
              },
              {
                "id": 4631,
                "name": "« pause » ou « pose » ?",
                "difficultyLevel": 7
              }
            ],
            "acquired": [
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4604,
                "name": "« -euil » ou « -ueil » ?",
                "difficultyLevel": 16
              },
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4573,
                "name": "« ni » ou « n'y » ?",
                "difficultyLevel": 14
              }
            ],
            "known": [
              {
                "id": 4562,
                "name": "« ces » ou « ses » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4586,
                "name": "« voie » ou « voix » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4571,
                "name": "« plus tôt » ou « plutôt » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4605,
                "name": "« certe » ou « certes » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4598,
                "name": "« peut être » ou « peut-être » ?",
                "difficultyLevel": 11
              }
            ]
          },
          "progData": [
            {
              "date": "2019-04-01",
              "sumscore": 94.92,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805233,
          "fullName": faker.name.findName(),
          "time": 17,
          "score": { "sum": 102, "count": 364 },
          "initialLevel": { "sum": 51, "count": 102 },
          "initialEval": 36,
          "lastConnection": "2019-03-22",
          "connectionsNbr": 2,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 4
              }
            ],
            "acquired": [
              {
                "id": 4545,
                "name": "« connection » ou « connexion » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 4
              },
              {
                "id": 4559,
                "name": "« cauchemar » ou « cauchemard » ?",
                "difficultyLevel": 4
              },
              {
                "id": 4534,
                "name": "« son » ou « sont » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4535,
                "name": "« avenir » ou « à venir » ?",
                "difficultyLevel": 3
              }
            ],
            "known": [
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4565,
                "name": "« mieu » ou « mieux » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4542,
                "name": "« j'envoie » ou « j'envois » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4539,
                "name": "« ça », « çà » ou « sa » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4547,
                "name": "« on » ou « ont » ?",
                "difficultyLevel": 3
              }
            ]
          },
          "progData": [
            {
              "date": "2019-03-22",
              "sumscore": 27.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805290,
          "fullName": faker.name.findName(),
          "time": 137,
          "score": { "sum": 129, "count": 364 },
          "initialLevel": { "sum": 89, "count": 129 },
          "initialEval": 64,
          "lastConnection": "2019-04-03",
          "connectionsNbr": 26,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 11
              }
            ],
            "acquired": [
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 56
              },
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4642,
                "name": "« des tuniques bleu foncé » ou « bleues foncées » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4627,
                "name": "« un » ou « une » espèce de ?",
                "difficultyLevel": 14
              }
            ],
            "known": [
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4572,
                "name": "« la plupart est » ou « la plupart sont » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4535,
                "name": "« avenir » ou « à venir » ?",
                "difficultyLevel": 12
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-22",
              "sumscore": 10.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-23",
              "sumscore": 22.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-03",
              "sumscore": 42.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-06",
              "sumscore": 76.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-07",
              "sumscore": 111.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-03",
              "sumscore": 123.88,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805291,
          "fullName": faker.name.findName(),
          "time": 14,
          "score": { "sum": 65, "count": 364 },
          "initialLevel": { "sum": 29, "count": 65 },
          "initialEval": 21,
          "lastConnection": "2019-03-08",
          "connectionsNbr": 2,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 6
              },
              {
                "id": 4566,
                "name": "« en fesant » ou « en faisant » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4540,
                "name": "« dans » ou « d'en » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4564,
                "name": "« quand » ou « qu'en » ?",
                "difficultyLevel": 2
              }
            ],
            "acquired": [
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4556,
                "name": "« est » ou « et » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4539,
                "name": "« ça », « çà » ou « sa » ?",
                "difficultyLevel": 2
              }
            ],
            "known": [
              {
                "id": 4565,
                "name": "« mieu » ou « mieux » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4548,
                "name": "« je le savais » ou « je le savait » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4552,
                "name": "« je peux » ou « je peut » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 2
              },
              {
                "id": 4549,
                "name": "« nous nous amusont » ou « nous nous amusons » ?",
                "difficultyLevel": 2
              }
            ]
          },
          "progData": [
            { "date": "2019-03-08", "sumscore": 11.76, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805288,
          "fullName": faker.name.findName(),
          "time": 516,
          "score": { "sum": 265, "count": 364 },
          "initialLevel": { "sum": 93, "count": 265 },
          "initialEval": 42,
          "lastConnection": "2019-03-14",
          "connectionsNbr": 42,
          "lastModule": "Excellence",
          "topNRules": {
            "focused": [
              {
                "id": 8844,
                "name": "« il convainc » ou « il convint » ?",
                "difficultyLevel": 19
              },
              {
                "id": 8894,
                "name":
                  "« elle a l'air sérieux » ou « elle a l'air sérieuse » ?",
                "difficultyLevel": 16
              },
              {
                "id": 8899,
                "name": "« ledit véhicule », « la loi susdite »",
                "difficultyLevel": 16
              },
              {
                "id": 8904,
                "name": "« vu les résultats », « excepté les erreurs »",
                "difficultyLevel": 14
              },
              {
                "id": 8887,
                "name": "« initier une personne » mais « lancer un projet »",
                "difficultyLevel": 13
              }
            ],
            "acquired": [
              {
                "id": 7978,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 61
              },
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 55
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 51
              },
              {
                "id": 7984,
                "name":
                  "L'usage ou non de la virgule autour des propositions relatives",
                "difficultyLevel": 51
              },
              {
                "id": 7993,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 37
              }
            ],
            "known": [
              {
                "id": 4663,
                "name": "« tout énervée » ou « toute énervée » ?",
                "difficultyLevel": 36
              },
              {
                "id": 4578,
                "name": "« qu'il ait » ou « qu'il est » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 18
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-19",
              "sumscore": 10.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-20",
              "sumscore": 19.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-21",
              "sumscore": 28.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-27",
              "sumscore": 34.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-29",
              "sumscore": 53.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-08",
              "sumscore": 71.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-12",
              "sumscore": 83.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-25",
              "sumscore": 92.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-31",
              "sumscore": 102.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-01",
              "sumscore": 105.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-03",
              "sumscore": 140.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-05",
              "sumscore": 153.0,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-02-27",
              "sumscore": 160.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-03-01",
              "sumscore": 206.92,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-03-02",
              "sumscore": 221.48,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-03-14",
              "sumscore": 265.91998,
              "moduleName": "Excellence"
            }
          ]
        },
        {
          "id": 3805225,
          "fullName": faker.name.findName(),
          "time": 303,
          "score": { "sum": 103, "count": 364 },
          "initialLevel": { "sum": 26, "count": 103 },
          "initialEval": 19,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 24,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 75
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 69
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 34
              },
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 31
              },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 25
              }
            ],
            "acquired": [
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 53
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4600,
                "name": "« entretien » ou « entretient » ?",
                "difficultyLevel": 30
              },
              {
                "id": 4573,
                "name": "« ni » ou « n'y » ?",
                "difficultyLevel": 29
              }
            ],
            "known": [
              {
                "id": 4593,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 39
              },
              {
                "id": 4548,
                "name": "« je le savais » ou « je le savait » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4564,
                "name": "« quand » ou « qu'en » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4538,
                "name": "« ou » ou « où » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 12
              }
            ]
          },
          "progData": [
            { "date": "2018-11-16", "sumscore": 3.0, "moduleName": "Pro" },
            { "date": "2018-11-25", "sumscore": 8.0, "moduleName": "Pro" },
            { "date": "2019-01-03", "sumscore": 16.0, "moduleName": "Pro" },
            { "date": "2019-01-05", "sumscore": 41.82, "moduleName": "Pro" },
            {
              "date": "2019-01-06",
              "sumscore": 55.579998,
              "moduleName": "Pro"
            },
            { "date": "2019-04-01", "sumscore": 68.979996, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805292,
          "fullName": faker.name.findName(),
          "time": 266,
          "score": { "sum": 108, "count": 364 },
          "initialLevel": { "sum": 30, "count": 108 },
          "initialEval": 21,
          "lastConnection": "2019-01-06",
          "connectionsNbr": 19,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 38
              },
              {
                "id": 4573,
                "name": "« ni » ou « n'y » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4612,
                "name":
                  "« ce faisant » ou « se faisant » ? « pour ce faire » ou « pour se faire » ?",
                "difficultyLevel": 8
              },
              {
                "id": 4730,
                "name":
                  "« apeller » ou « appeler » ? « rapelle » ou « rappelle » ?",
                "difficultyLevel": 6
              }
            ],
            "acquired": [
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 42
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 37
              },
              {
                "id": 4603,
                "name": "« davantage » ou « d'avantage(s) » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4553,
                "name": "« il travail » ou « il travaille » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4583,
                "name": "« tu tries » ou « tu tris » ?",
                "difficultyLevel": 18
              }
            ],
            "known": [
              {
                "id": 4586,
                "name": "« voie » ou « voix » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4582,
                "name": "« c'est » ou « s'est » ? « ce sont » ou « se sont » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 16
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 11
              }
            ]
          },
          "progData": [
            { "date": "2018-12-27", "sumscore": 9.0, "moduleName": "Pro" },
            { "date": "2018-12-29", "sumscore": 17.0, "moduleName": "Pro" },
            { "date": "2019-01-03", "sumscore": 30.94, "moduleName": "Pro" },
            { "date": "2019-01-04", "sumscore": 52.7, "moduleName": "Pro" },
            { "date": "2019-01-06", "sumscore": 78.46, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805293,
          "fullName": faker.name.findName(),
          "time": 104,
          "score": { "sum": 93, "count": 364 },
          "initialLevel": { "sum": 22, "count": 93 },
          "initialEval": 16,
          "lastConnection": "2019-01-08",
          "connectionsNbr": 8,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 42
              },
              {
                "id": 4541,
                "name": "« vous parler » ou « vous parlez » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4578,
                "name": "« qu'il ait » ou « qu'il est » ?",
                "difficultyLevel": 3
              }
            ],
            "acquired": [
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4577,
                "name": "« un envoie » ou « un envoi » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4573,
                "name": "« ni » ou « n'y » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4534,
                "name": "« son » ou « sont » ?",
                "difficultyLevel": 7
              }
            ],
            "known": [
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4540,
                "name": "« dans » ou « d'en » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4539,
                "name": "« ça », « çà » ou « sa » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4547,
                "name": "« on » ou « ont » ?",
                "difficultyLevel": 3
              }
            ]
          },
          "progData": [
            { "date": "2018-11-19", "sumscore": 7.0, "moduleName": "Pro" },
            { "date": "2018-11-20", "sumscore": 20.88, "moduleName": "Pro" },
            { "date": "2019-01-08", "sumscore": 32.879997, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805280,
          "fullName": faker.name.findName(),
          "time": 1262,
          "score": { "sum": 291, "count": 364 },
          "initialLevel": { "sum": 102, "count": 291 },
          "initialEval": 38,
          "lastConnection": "2019-04-06",
          "connectionsNbr": 110,
          "lastModule": "Excellence",
          "topNRules": {
            "focused": [
              {
                "id": 8938,
                "name":
                  "« Sa Majesté est prête » mais « Sa Majesté le roi est prêt »",
                "difficultyLevel": 79
              },
              {
                "id": 8818,
                "name": "« fatigant » ou « fatiguant » ?",
                "difficultyLevel": 67
              },
              {
                "id": 8889,
                "name": "« martyr » ou « martyre » ?",
                "difficultyLevel": 50
              },
              {
                "id": 8897,
                "name": "accord avec « plus d'un »",
                "difficultyLevel": 50
              },
              {
                "id": 8892,
                "name": "« chaos » ou « cahot » ?",
                "difficultyLevel": 49
              }
            ],
            "acquired": [
              {
                "id": 7976,
                "name":
                  "Guillemets : point avant ou après le guillemet fermant",
                "difficultyLevel": 72
              },
              {
                "id": 4727,
                "name":
                  "« lui même » ou « lui-même » ? « eux-même » ou « eux-mêmes » ?",
                "difficultyLevel": 67
              },
              {
                "id": 7983,
                "name": "Le mot « heure » en abrégé",
                "difficultyLevel": 60
              },
              {
                "id": 7989,
                "name":
                  "Premier Ministre, premier Ministre ou Premier ministre ; ministre des Affaires étrangères…",
                "difficultyLevel": 53
              },
              {
                "id": 7977,
                "name":
                  "Abréviation des nombres ordinaux : 1<SUP>er</SUP> ; 1<SUP>re</SUP> ; 2<SUP>e</SUP> ; 3<SUP>e</SUP>…",
                "difficultyLevel": 52
              }
            ],
            "known": [
              {
                "id": 4635,
                "name": "« quelque » ou « quel que » ?",
                "difficultyLevel": 39
              },
              {
                "id": 4542,
                "name": "« j'envoie » ou « j'envois » ?",
                "difficultyLevel": 37
              },
              {
                "id": 4618,
                "name": "« hormi » ou « hormis » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4610,
                "name": "« presque » ou « presqu' » ?",
                "difficultyLevel": 18
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-18",
              "sumscore": 65.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-25",
              "sumscore": 94.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-02",
              "sumscore": 99.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-04",
              "sumscore": 109.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-07",
              "sumscore": 111.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-28",
              "sumscore": 115.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-31",
              "sumscore": 143.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-01",
              "sumscore": 150.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-03",
              "sumscore": 157.0,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-01-04",
              "sumscore": 162.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-01-05",
              "sumscore": 169.0,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-01-06",
              "sumscore": 178.0,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-02-02",
              "sumscore": 179.0,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-02-09",
              "sumscore": 190.0,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-02-21",
              "sumscore": 204.8,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-03-07",
              "sumscore": 241.36,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-03-21",
              "sumscore": 255.8,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-03-28",
              "sumscore": 270.12,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-04-03",
              "sumscore": 284.32,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-04-06",
              "sumscore": 291.48,
              "moduleName": "Excellence"
            }
          ]
        },
        {
          "id": 3805223,
          "fullName": faker.name.findName(),
          "time": 329,
          "score": { "sum": 133, "count": 364 },
          "initialLevel": { "sum": 73, "count": 133 },
          "initialEval": 52,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 30,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4729,
                "name": "« du » ou « dû » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 16
              },
              {
                "id": 4613,
                "name": "« ci-joint » ou « ci-jointe » ?",
                "difficultyLevel": 14
              },
              {
                "id": 4604,
                "name": "« -euil » ou « -ueil » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4650,
                "name": "« sans dessus dessous » ou « sens dessus dessous » ?",
                "difficultyLevel": 12
              }
            ],
            "acquired": [
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 52
              },
              {
                "id": 4609,
                "name": "« voir » ou « voire » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4629,
                "name": "« tache » ou « tâche » ?",
                "difficultyLevel": 16
              }
            ],
            "known": [
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 35
              },
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 28
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 27
              },
              { "id": 4589, "name": "« c » ou « ç » ?", "difficultyLevel": 22 },
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 20
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-07",
              "sumscore": 34.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-15",
              "sumscore": 48.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-06",
              "sumscore": 60.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-03",
              "sumscore": 75.64,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-07",
              "sumscore": 87.52,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-10",
              "sumscore": 99.46,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-12",
              "sumscore": 124.44,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 133.32,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805287,
          "fullName": faker.name.findName(),
          "time": 268,
          "score": { "sum": 161, "count": 364 },
          "initialLevel": { "sum": 85, "count": 161 },
          "initialEval": 56,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 24,
          "lastModule": "Orthotypographie",
          "topNRules": {
            "focused": [
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 41
              },
              {
                "id": 7977,
                "name":
                  "Abréviation des nombres ordinaux : 1<SUP>er</SUP> ; 1<SUP>re</SUP> ; 2<SUP>e</SUP> ; 3<SUP>e</SUP>…",
                "difficultyLevel": 34
              },
              {
                "id": 7978,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 33
              },
              {
                "id": 7993,
                "name": "Ponctuation des énumérations",
                "difficultyLevel": 33
              },
              {
                "id": 7986,
                "name": "Ponctuation et espaces",
                "difficultyLevel": 23
              }
            ],
            "acquired": [
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 41
              },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4635,
                "name": "« quelque » ou « quel que » ?",
                "difficultyLevel": 23
              },
              {
                "id": 4656,
                "name": "« éi » ou « éï » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4727,
                "name":
                  "« lui même » ou « lui-même » ? « eux-même » ou « eux-mêmes » ?",
                "difficultyLevel": 19
              }
            ],
            "known": [
              {
                "id": 4570,
                "name": "« -amment » ou « -emment » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4592,
                "name": "« si il » ou « s'il » ?",
                "difficultyLevel": 16
              },
              {
                "id": 4598,
                "name": "« peut être » ou « peut-être » ?",
                "difficultyLevel": 16
              }
            ]
          },
          "progData": [
            {
              "date": "2018-11-16",
              "sumscore": 7.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-17",
              "sumscore": 40.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-19",
              "sumscore": 45.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-24",
              "sumscore": 72.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-09",
              "sumscore": 97.88,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-16",
              "sumscore": 111.52,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-06",
              "sumscore": 122.52,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-30",
              "sumscore": 135.5,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-03-31",
              "sumscore": 152.02,
              "moduleName": "Orthotypographie"
            },
            {
              "date": "2019-04-01",
              "sumscore": 161.90001,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805221,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 105, "count": 364 },
          "initialLevel": { "sum": 65, "count": 105 },
          "initialEval": 46,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805273,
          "fullName": faker.name.findName(),
          "time": 1,
          "score": { "sum": 101, "count": 364 },
          "initialLevel": { "sum": 59, "count": 101 },
          "initialEval": 42,
          "lastConnection": "2018-10-25",
          "connectionsNbr": 1,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [],
            "known": [
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4539,
                "name": "« ça », « çà » ou « sa » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4548,
                "name": "« je le savais » ou « je le savait » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4550,
                "name":
                  "« tu mange » ou « tu manges » ? « tu mangera » ou « tu mangeras » ?",
                "difficultyLevel": 1
              },
              {
                "id": 4565,
                "name": "« mieu » ou « mieux » ?",
                "difficultyLevel": 1
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-25",
              "sumscore": 14.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805279,
          "fullName": faker.name.findName(),
          "time": 57,
          "score": { "sum": 105, "count": 364 },
          "initialLevel": { "sum": 71, "count": 105 },
          "initialEval": 51,
          "lastConnection": "2019-01-06",
          "connectionsNbr": 4,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4545,
                "name": "« connection » ou « connexion » ?",
                "difficultyLevel": 5
              }
            ],
            "acquired": [
              {
                "id": 4582,
                "name": "« c'est » ou « s'est » ? « ce sont » ou « se sont » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4557,
                "name": "« notre » ou « nôtre » ? « votre » ou « vôtre » ?",
                "difficultyLevel": 13
              },
              {
                "id": 4559,
                "name": "« cauchemar » ou « cauchemard » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4577,
                "name": "« un envoie » ou « un envoi » ?",
                "difficultyLevel": 5
              }
            ],
            "known": [
              { "id": 4554, "name": "accent ou pas ?", "difficultyLevel": 12 },
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4569,
                "name": "« tous les » ou « tout les » ?",
                "difficultyLevel": 12
              },
              {
                "id": 4607,
                "name": "« malgré » ou « malgrés » ?",
                "difficultyLevel": 10
              },
              {
                "id": 4540,
                "name": "« dans » ou « d'en » ?",
                "difficultyLevel": 9
              }
            ]
          },
          "progData": [
            {
              "date": "2019-01-06",
              "sumscore": 41.76,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805277,
          "fullName": faker.name.findName(),
          "time": 56,
          "score": { "sum": 82, "count": 364 },
          "initialLevel": { "sum": 40, "count": 82 },
          "initialEval": 29,
          "lastConnection": "2019-01-06",
          "connectionsNbr": 6,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 11
              },
              { "id": 4537, "name": "« a » ou « à » ?", "difficultyLevel": 9 },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4553,
                "name": "« il travail » ou « il travaille » ?",
                "difficultyLevel": 4
              },
              {
                "id": 4569,
                "name": "« tous les » ou « tout les » ?",
                "difficultyLevel": 4
              }
            ],
            "acquired": [
              {
                "id": 4538,
                "name": "« ou » ou « où » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4567,
                "name": "« pour les voirs » ou « pour les voir » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4571,
                "name": "« plus tôt » ou « plutôt » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4556,
                "name": "« est » ou « et » ?",
                "difficultyLevel": 5
              }
            ],
            "known": [
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4550,
                "name":
                  "« tu mange » ou « tu manges » ? « tu mangera » ou « tu mangeras » ?",
                "difficultyLevel": 10
              },
              {
                "id": 4549,
                "name": "« nous nous amusont » ou « nous nous amusons » ?",
                "difficultyLevel": 8
              },
              {
                "id": 4577,
                "name": "« un envoie » ou « un envoi » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4573,
                "name": "« ni » ou « n'y » ?",
                "difficultyLevel": 6
              }
            ]
          },
          "progData": [
            { "date": "2019-01-06", "sumscore": 31.64, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805266,
          "fullName": faker.name.findName(),
          "time": 22,
          "score": { "sum": 123, "count": 364 },
          "initialLevel": { "sum": 55, "count": 123 },
          "initialEval": 39,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 3,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4550,
                "name":
                  "« tu mange » ou « tu manges » ? « tu mangera » ou « tu mangeras » ?",
                "difficultyLevel": 9
              },
              {
                "id": 4540,
                "name": "« dans » ou « d'en » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4557,
                "name": "« notre » ou « nôtre » ? « votre » ou « vôtre » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4588,
                "name": "« il se détend » ou « il se détent » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 3
              }
            ],
            "known": [
              {
                "id": 4578,
                "name": "« qu'il ait » ou « qu'il est » ?",
                "difficultyLevel": 7
              },
              {
                "id": 4733,
                "name":
                  "« une qualitée » ou « une qualité » ? « l'amitiée » ou « l'amitié » ?",
                "difficultyLevel": 6
              },
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4534,
                "name": "« son » ou « sont » ?",
                "difficultyLevel": 3
              }
            ]
          },
          "progData": [
            {
              "date": "2019-04-01",
              "sumscore": 42.0,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805264,
          "fullName": faker.name.findName(),
          "time": 811,
          "score": { "sum": 332, "count": 364 },
          "initialLevel": { "sum": 65, "count": 332 },
          "initialEval": 17,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 50,
          "lastModule": "Excellence",
          "topNRules": {
            "focused": [
              {
                "id": 8953,
                "name": "« béni » ou « bénit » ?",
                "difficultyLevel": 77
              },
              {
                "id": 8975,
                "name": "« Athéna, déesse éponyme d'Athènes »",
                "difficultyLevel": 61
              },
              {
                "id": 8969,
                "name": "« eut » ou « eût », « fut » ou « fût » ?",
                "difficultyLevel": 50
              },
              {
                "id": 8947,
                "name":
                  "« les bleu-vert », « les bleus ciel », « les bleus foncés »",
                "difficultyLevel": 49
              },
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 48
              }
            ],
            "acquired": [
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 54
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 30
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 21
              },
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 21
              }
            ],
            "known": [
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4736,
                "name":
                  "« auparavant », « auparavent », « au paravant » ou « au par avant » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4604,
                "name": "« -euil » ou « -ueil » ?",
                "difficultyLevel": 17
              },
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 15
              },
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 12
              }
            ]
          },
          "progData": [
            { "date": "2018-10-26", "sumscore": 4.0, "moduleName": "Pro" },
            { "date": "2018-11-21", "sumscore": 15.0, "moduleName": "Pro" },
            { "date": "2018-12-08", "sumscore": 27.0, "moduleName": "Pro" },
            { "date": "2018-12-10", "sumscore": 41.0, "moduleName": "Pro" },
            { "date": "2018-12-16", "sumscore": 45.0, "moduleName": "Pro" },
            { "date": "2018-12-20", "sumscore": 47.0, "moduleName": "Pro" },
            {
              "date": "2019-01-02",
              "sumscore": 190.68,
              "moduleName": "Excellence"
            },
            {
              "date": "2019-01-03",
              "sumscore": 305.84,
              "moduleName": "Excellence"
            },
            { "date": "2019-04-01", "sumscore": 332.6, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805269,
          "fullName": faker.name.findName(),
          "time": 409,
          "score": { "sum": 139, "count": 364 },
          "initialLevel": { "sum": 59, "count": 139 },
          "initialEval": 42,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 20,
          "lastModule": "Orthotypographie",
          "topNRules": {
            "focused": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 67
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 64
              },
              {
                "id": 4642,
                "name": "« des tuniques bleu foncé » ou « bleues foncées » ?",
                "difficultyLevel": 37
              },
              {
                "id": 4637,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 36
              },
              {
                "id": 4661,
                "name": "du bon usage de « s'avérer »",
                "difficultyLevel": 25
              }
            ],
            "acquired": [
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 60
              },
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 49
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 44
              },
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 40
              },
              {
                "id": 4600,
                "name": "« entretien » ou « entretient » ?",
                "difficultyLevel": 38
              }
            ],
            "known": [
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 65
              },
              {
                "id": 4590,
                "name":
                  "« Est-ce que le repas est-il prêt ? » ou « Est-ce que le repas est prêt » ? ",
                "difficultyLevel": 53
              },
              {
                "id": 4579,
                "name": "« demi » ou « demie » ?",
                "difficultyLevel": 41
              },
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 29
              },
              {
                "id": 4641,
                "name": "« des nuages blanc » ou « des nuages blancs » ?",
                "difficultyLevel": 28
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-21",
              "sumscore": 8.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-11-22",
              "sumscore": 30.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-05",
              "sumscore": 33.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-06",
              "sumscore": 78.4,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 139.22,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 3805259,
          "fullName": faker.name.findName(),
          "time": 4,
          "score": { "sum": 69, "count": 364 },
          "initialLevel": { "sum": 12, "count": 69 },
          "initialEval": 9,
          "lastConnection": "2019-03-04",
          "connectionsNbr": 3,
          "lastModule": "Pro",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4548,
                "name": "« je le savais » ou « je le savait » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4565,
                "name": "« mieu » ou « mieux » ?",
                "difficultyLevel": 3
              }
            ],
            "known": [
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4552,
                "name": "« je peux » ou « je peut » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4556,
                "name": "« est » ou « et » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4566,
                "name": "« en fesant » ou « en faisant » ?",
                "difficultyLevel": 2
              }
            ]
          },
          "progData": [
            { "date": "2019-03-04", "sumscore": 7.0, "moduleName": "Pro" }
          ]
        },
        {
          "id": 3805260,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 124, "count": 364 },
          "initialLevel": { "sum": 73, "count": 124 },
          "initialEval": 52,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 3805261,
          "fullName": faker.name.findName(),
          "time": 309,
          "score": { "sum": 139, "count": 364 },
          "initialLevel": { "sum": 112, "count": 139 },
          "initialEval": 80,
          "lastConnection": "2019-03-31",
          "connectionsNbr": 15,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4662,
                "name": "« j'ai été » ou « je suis allé » ?",
                "difficultyLevel": 23
              }
            ],
            "acquired": [
              {
                "id": 4572,
                "name": "« la plupart est » ou « la plupart sont » ?",
                "difficultyLevel": 29
              },
              {
                "id": 4665,
                "name": "« après qu'il a » ou « après qu'il ait » ?",
                "difficultyLevel": 29
              },
              {
                "id": 4635,
                "name": "« quelque » ou « quel que » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4738,
                "name": "« cent » ou « cents » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4731,
                "name":
                  "« les lundi » ou « les lundis » ? « les lundis soir » ou « les lundis soirs » ?",
                "difficultyLevel": 19
              }
            ],
            "known": [
              {
                "id": 4644,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 49
              },
              {
                "id": 4623,
                "name": "« quoique » ou « quoi que » ?",
                "difficultyLevel": 46
              },
              {
                "id": 4730,
                "name":
                  "« apeller » ou « appeler » ? « rapelle » ou « rappelle » ?",
                "difficultyLevel": 38
              },
              {
                "id": 4657,
                "name": "« à l'attention de » ou « à l'intention de » ?",
                "difficultyLevel": 27
              },
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 22
              }
            ]
          },
          "progData": [
            {
              "date": "2018-12-18",
              "sumscore": 25.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-12-20",
              "sumscore": 35.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-07",
              "sumscore": 66.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-01-08",
              "sumscore": 81.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-30",
              "sumscore": 126.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-31",
              "sumscore": 139.88,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 4218939,
          "fullName": faker.name.findName(),
          "time": 116,
          "score": { "sum": 127, "count": 364 },
          "initialLevel": { "sum": 76, "count": 127 },
          "initialEval": 54,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 13,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4604,
                "name": "« -euil » ou « -ueil » ?",
                "difficultyLevel": 31
              },
              {
                "id": 4737,
                "name": "« intéresser » ou « interresser » ?",
                "difficultyLevel": 30
              },
              {
                "id": 4585,
                "name": "« leur » ou « leurs » ?",
                "difficultyLevel": 20
              },
              {
                "id": 4484,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 13
              },
              {
                "id": 4541,
                "name": "« vous parler » ou « vous parlez » ?",
                "difficultyLevel": 12
              }
            ],
            "acquired": [
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 33
              },
              {
                "id": 4623,
                "name": "« quoique » ou « quoi que » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4730,
                "name":
                  "« apeller » ou « appeler » ? « rapelle » ou « rappelle » ?",
                "difficultyLevel": 21
              },
              {
                "id": 3218,
                "name":
                  "« personel » ou « personnel » ? « professionel » ou « professionnel » ? « national » ou « nationnal » ?",
                "difficultyLevel": 18
              },
              {
                "id": 4616,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 14
              }
            ],
            "known": [
              {
                "id": 4640,
                "name": "« parti » ou « partie » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4568,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 23
              },
              {
                "id": 4416,
                "name":
                  "« des comptables compétent » ou « des comptables compétents » ?",
                "difficultyLevel": 22
              },
              {
                "id": 4551,
                "name": "« la », « l'a(s) » ou « là » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4557,
                "name": "« notre » ou « nôtre » ? « votre » ou « vôtre » ?",
                "difficultyLevel": 15
              }
            ]
          },
          "progData": [
            {
              "date": "2019-03-07",
              "sumscore": 51.76,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-28",
              "sumscore": 83.22,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-04-01",
              "sumscore": 110.98,
              "moduleName": "Supérieur"
            }
          ]
        },
        {
          "id": 4218941,
          "fullName": faker.name.findName(),
          "time": 0,
          "score": { "sum": 74, "count": 364 },
          "initialLevel": { "sum": 56, "count": 74 },
          "initialEval": 40,
          "lastConnection": null,
          "connectionsNbr": 0,
          "lastModule": null,
          "topNRules": { "focused": [], "acquired": [], "known": [] },
          "progData": []
        },
        {
          "id": 4218943,
          "fullName": faker.name.findName(),
          "time": 33,
          "score": { "sum": 63, "count": 364 },
          "initialLevel": { "sum": 42, "count": 63 },
          "initialEval": 30,
          "lastConnection": "2019-04-01",
          "connectionsNbr": 3,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [
              {
                "id": 4543,
                "name": "« mange ! » ou « manges ! » ?",
                "difficultyLevel": 10
              },
              {
                "id": 4542,
                "name": "« j'envoie » ou « j'envois » ?",
                "difficultyLevel": 7
              }
            ],
            "acquired": [
              {
                "id": 4545,
                "name": "« connection » ou « connexion » ?",
                "difficultyLevel": 16
              },
              {
                "id": 4558,
                "name": "« avoir à faire » ou « avoir affaire » ?",
                "difficultyLevel": 11
              },
              {
                "id": 4559,
                "name": "« cauchemar » ou « cauchemard » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4532,
                "name": "« ils chantes » ou « ils chantent » ?",
                "difficultyLevel": 3
              },
              {
                "id": 4547,
                "name": "« on » ou « ont » ?",
                "difficultyLevel": 3
              }
            ],
            "known": [
              {
                "id": 4536,
                "name": "« -é » ou « -er » ?",
                "difficultyLevel": 6
              },
              {
                "id": 4535,
                "name": "« avenir » ou « à venir » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4550,
                "name":
                  "« tu mange » ou « tu manges » ? « tu mangera » ou « tu mangeras » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4584,
                "name": "« sans », « s'en » ou « c'en » ?",
                "difficultyLevel": 5
              },
              {
                "id": 4534,
                "name": "« son » ou « sont » ?",
                "difficultyLevel": 3
              }
            ]
          },
          "progData": [
            {
              "date": "2019-04-01",
              "sumscore": 27.76,
              "moduleName": "Supérieur"
            }
          ]
        }
      ],
      "insights": {
        "lastWeek": {
          "time": { "sum": 1, "sumd": -8 },
          "score": { "sum": 1, "sumd": -17 },
          "activeUsers": { "sum": 2, "sumd": -11 },
          "inactiveUsers": { "sum": 26, "sumd": 11 },
          "connections": [
            { "count": 0, "date": "2019-04-02" },
            { "count": 8, "date": "2019-04-03" },
            { "count": 1, "date": "2019-04-04" },
            { "count": 0, "date": "2019-04-05" },
            { "count": 2, "date": "2019-04-06" },
            { "count": 0, "date": "2019-04-07" },
            { "count": 0, "date": "2019-04-08" }
          ],
          "topNRules": {
            "focused": [
              {
                "id": 3495,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 75
              },
              {
                "id": 8975,
                "name": "« Athéna, déesse éponyme d'Athènes »",
                "difficultyLevel": 61
              },
              {
                "id": 3554,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 54
              },
              {
                "id": 8969,
                "name": "« eut » ou « eût », « fut » ou « fût » ?",
                "difficultyLevel": 50
              },
              {
                "id": 8947,
                "name":
                  "« les bleu-vert », « les bleus ciel », « les bleus foncés »",
                "difficultyLevel": 49
              }
            ],
            "acquired": [
              {
                "id": 8178,
                "name":
                  "Guillemets : point avant ou après le guillemet fermant",
                "difficultyLevel": 72
              },
              {
                "id": 8195,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 61
              },
              {
                "id": 8182,
                "name": "Le mot « heure » en abrégé",
                "difficultyLevel": 60
              },
              {
                "id": 3554,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 54
              },
              {
                "id": 3538,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 45
              }
            ],
            "known": [
              {
                "id": 3099,
                "name": "« quelque » ou « quel que » ?",
                "difficultyLevel": 39
              },
              {
                "id": 3519,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 39
              },
              {
                "id": 3128,
                "name": "« tout énervée » ou « toute énervée » ?",
                "difficultyLevel": 36
              },
              {
                "id": 3100,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 29
              },
              {
                "id": 3109,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 26
              }
            ]
          },
          "topNUsers": {
            "score": [
              { "id": 3805280, "sum": { "sum": 12, "sumd": -5 } },
              { "id": 3805290, "sum": { "sum": 2, "sumd": 2 } }
            ],
            "time": [
              { "id": 3805280, "sum": { "sum": 71, "sumd": -51 } },
              { "id": 3805290, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805292, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805264, "sum": { "sum": 0, "sumd": -39 } },
              { "id": 3805221, "sum": { "sum": 0, "sumd": 0 } }
            ],
            "help": [
              { "id": 3805290, "sum": { "sum": 32, "sumd": 32 } },
              { "id": 3805280, "sum": { "sum": 21, "sumd": 1 } }
            ],
            "dropout": [
              { "id": 3805292, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805266, "sum": { "sum": 0, "sumd": -22 } },
              { "id": 3805264, "sum": { "sum": 0, "sumd": -39 } },
              { "id": 3805223, "sum": { "sum": 0, "sumd": -9 } },
              { "id": 3805221, "sum": { "sum": 0, "sumd": 0 } }
            ]
          }
        },
        "lastMonth": {
          "time": { "sum": 12, "sumd": 7 },
          "score": { "sum": 22, "sumd": 10 },
          "activeUsers": { "sum": 10, "sumd": 7 },
          "inactiveUsers": { "sum": 18, "sumd": -7 },
          "connections": [
            { "count": 0, "date": "2019-03-10" },
            { "count": 2, "date": "2019-03-11" },
            { "count": 0, "date": "2019-03-12" },
            { "count": 0, "date": "2019-03-13" },
            { "count": 5, "date": "2019-03-14" },
            { "count": 1, "date": "2019-03-15" },
            { "count": 0, "date": "2019-03-16" },
            { "count": 3, "date": "2019-03-17" },
            { "count": 0, "date": "2019-03-18" },
            { "count": 1, "date": "2019-03-19" },
            { "count": 0, "date": "2019-03-20" },
            { "count": 2, "date": "2019-03-21" },
            { "count": 3, "date": "2019-03-22" },
            { "count": 0, "date": "2019-03-23" },
            { "count": 3, "date": "2019-03-24" },
            { "count": 0, "date": "2019-03-25" },
            { "count": 0, "date": "2019-03-26" },
            { "count": 0, "date": "2019-03-27" },
            { "count": 6, "date": "2019-03-28" },
            { "count": 0, "date": "2019-03-29" },
            { "count": 7, "date": "2019-03-30" },
            { "count": 3, "date": "2019-03-31" },
            { "count": 41, "date": "2019-04-01" },
            { "count": 0, "date": "2019-04-02" },
            { "count": 8, "date": "2019-04-03" },
            { "count": 1, "date": "2019-04-04" },
            { "count": 0, "date": "2019-04-05" },
            { "count": 2, "date": "2019-04-06" },
            { "count": 0, "date": "2019-04-07" },
            { "count": 0, "date": "2019-04-08" }
          ],
          "topNRules": {
            "focused": [
              {
                "id": 3495,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (1)",
                "difficultyLevel": 75
              },
              {
                "id": 8975,
                "name": "« Athéna, déesse éponyme d'Athènes »",
                "difficultyLevel": 61
              },
              {
                "id": 3554,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 54
              },
              {
                "id": 8969,
                "name": "« eut » ou « eût », « fut » ou « fût » ?",
                "difficultyLevel": 50
              },
              {
                "id": 8947,
                "name":
                  "« les bleu-vert », « les bleus ciel », « les bleus foncés »",
                "difficultyLevel": 49
              }
            ],
            "acquired": [
              {
                "id": 8178,
                "name":
                  "Guillemets : point avant ou après le guillemet fermant",
                "difficultyLevel": 72
              },
              {
                "id": 8195,
                "name": "Majuscules ou non dans un titre d'œuvre",
                "difficultyLevel": 61
              },
              {
                "id": 8182,
                "name": "Le mot « heure » en abrégé",
                "difficultyLevel": 60
              },
              {
                "id": 3554,
                "name":
                  "participe passé conjugué avec l'auxiliaire « avoir » (2)",
                "difficultyLevel": 54
              },
              {
                "id": 3538,
                "name": "« je ferai » ou « je ferais » ?",
                "difficultyLevel": 45
              }
            ],
            "known": [
              {
                "id": 3099,
                "name": "« quelque » ou « quel que » ?",
                "difficultyLevel": 39
              },
              {
                "id": 3519,
                "name": "« près » ou « prêt » ?",
                "difficultyLevel": 39
              },
              {
                "id": 3128,
                "name": "« tout énervée » ou « toute énervée » ?",
                "difficultyLevel": 36
              },
              {
                "id": 3100,
                "name": "quel temps après « si » ?",
                "difficultyLevel": 29
              },
              {
                "id": 3109,
                "name": "participe passé suivi d'un infinitif",
                "difficultyLevel": 26
              }
            ]
          },
          "topNUsers": {
            "score": [
              { "id": 3805296, "sum": { "sum": 93, "sumd": 91 } },
              { "id": 3805269, "sum": { "sum": 61, "sumd": 61 } },
              { "id": 4218939, "sum": { "sum": 59, "sumd": 7 } },
              { "id": 3805261, "sum": { "sum": 59, "sumd": 59 } },
              { "id": 3805280, "sum": { "sum": 44, "sumd": -24 } }
            ],
            "time": [
              { "id": 3805280, "sum": { "sum": 304, "sumd": 78 } },
              { "id": 3805261, "sum": { "sum": 190, "sumd": 190 } },
              { "id": 3805296, "sum": { "sum": 138, "sumd": 134 } },
              { "id": 3805225, "sum": { "sum": 83, "sumd": 83 } },
              { "id": 4218939, "sum": { "sum": 74, "sumd": 32 } }
            ],
            "help": [
              { "id": 3805290, "sum": { "sum": 32, "sumd": 32 } },
              { "id": 3805225, "sum": { "sum": 28, "sumd": 28 } },
              { "id": 3805269, "sum": { "sum": 22, "sumd": 22 } },
              { "id": 3805245, "sum": { "sum": 21, "sumd": 21 } },
              { "id": 3805280, "sum": { "sum": 19, "sumd": 5 } }
            ],
            "dropout": [
              { "id": 3805240, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805273, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805292, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805293, "sum": { "sum": 0, "sumd": 0 } },
              { "id": 3805221, "sum": { "sum": 0, "sumd": 0 } }
            ]
          }
        }
      },
      "modules": [
        {
          "key": "Pro",
          "index": 0,
          "nbrOfRules": 84,
          "routeId": 62,
          "productId": 55
        },
        {
          "key": "Pont supérieur",
          "index": 1,
          "nbrOfRules": 56,
          "routeId": 62,
          "productId": 56
        },
        {
          "key": "Orthotypographie",
          "index": 2,
          "nbrOfRules": 24,
          "routeId": 62,
          "productId": 57
        },
        {
          "key": "Excellence",
          "index": 3,
          "nbrOfRules": 200,
          "routeId": 62,
          "productId": 71
        },
        {
          "key": "Supérieur",
          "index": 0,
          "nbrOfRules": 140,
          "routeId": 68,
          "productId": 53
        },
        {
          "key": "Orthotypographie",
          "index": 2,
          "nbrOfRules": 24,
          "routeId": 68,
          "productId": 57
        },
        {
          "key": "Excellence",
          "index": 3,
          "nbrOfRules": 200,
          "routeId": 68,
          "productId": 71
        }
      ],
      "evaluations": [
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805221,
          "mark": null,
          "score": 46,
          "time": 46.8167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805221,
          "mark": 5.5,
          "score": 54,
          "time": 47.6667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805221,
          "mark": 5.0,
          "score": 48,
          "time": 34.2667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805223,
          "mark": null,
          "score": 52,
          "time": 54.8
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805223,
          "mark": 7.5,
          "score": 61,
          "time": 37.0167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805223,
          "mark": 6.0,
          "score": 44,
          "time": 28.0167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805223,
          "mark": 8.0,
          "score": 57,
          "time": 32.3333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805225,
          "mark": null,
          "score": 19,
          "time": 25.15
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805225,
          "mark": 5.0,
          "score": 30,
          "time": 28.5167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805225,
          "mark": 5.0,
          "score": 28,
          "time": 33.15
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805225,
          "mark": 6.5,
          "score": 33,
          "time": 28.2667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805233,
          "mark": null,
          "score": 36,
          "time": 55.85
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805233,
          "mark": 3.5,
          "score": 36,
          "time": 47.8167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805233,
          "mark": 2.0,
          "score": 9,
          "time": 3.3667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805233,
          "mark": 4.5,
          "score": 39,
          "time": 45.7
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805240,
          "mark": null,
          "score": 45,
          "time": 43.55
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805240,
          "mark": 14.0,
          "score": 83,
          "time": 45.9167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805240,
          "mark": 3.5,
          "score": 1,
          "time": 5.8833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805240,
          "mark": 13.5,
          "score": 81,
          "time": 40.1667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805241,
          "mark": null,
          "score": 47,
          "time": 44.5833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805241,
          "mark": 5.5,
          "score": 52,
          "time": 40.35
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805241,
          "mark": 5.0,
          "score": 49,
          "time": 55.8833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805241,
          "mark": 6.5,
          "score": 56,
          "time": 54.7
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805243,
          "mark": null,
          "score": 55,
          "time": 50.0
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805243,
          "mark": 6.0,
          "score": 56,
          "time": 40.4333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février V3",
          "id": 3805243,
          "mark": 7.5,
          "score": 63,
          "time": 37.4167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805243,
          "mark": 8.5,
          "score": 67,
          "time": 41.6333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805245,
          "mark": null,
          "score": 39,
          "time": 54.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805245,
          "mark": 13.0,
          "score": 73,
          "time": 43.5333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805245,
          "mark": 10.0,
          "score": 58,
          "time": 44.1167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805245,
          "mark": 11.0,
          "score": 61,
          "time": 34.35
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805259,
          "mark": null,
          "score": 9,
          "time": 55.95
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805259,
          "mark": 4.5,
          "score": 34,
          "time": 47.35
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805259,
          "mark": 4.5,
          "score": 32,
          "time": 40.6
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805260,
          "mark": null,
          "score": 52,
          "time": 31.1333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805260,
          "mark": 6.0,
          "score": 59,
          "time": 44.8667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805260,
          "mark": 10.0,
          "score": 74,
          "time": 49.2167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805260,
          "mark": 8.5,
          "score": 66,
          "time": 42.25
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805261,
          "mark": null,
          "score": 80,
          "time": 38.7167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805261,
          "mark": 7.0,
          "score": 71,
          "time": 39.2
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805261,
          "mark": 7.5,
          "score": 74,
          "time": 37.4167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805261,
          "mark": 11.5,
          "score": 87,
          "time": 35.7333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805264,
          "mark": null,
          "score": 17,
          "time": 36.3667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805264,
          "mark": 14.0,
          "score": 59,
          "time": 41.8667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805264,
          "mark": 15.0,
          "score": 66,
          "time": 46.8833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805266,
          "mark": null,
          "score": 39,
          "time": 55.9
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805266,
          "mark": 8.0,
          "score": 63,
          "time": 37.35
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805266,
          "mark": 9.0,
          "score": 64,
          "time": 39.55
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805266,
          "mark": 9.0,
          "score": 64,
          "time": 31.55
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805269,
          "mark": null,
          "score": 42,
          "time": 51.9667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805269,
          "mark": 11.0,
          "score": 66,
          "time": 43.4667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805269,
          "mark": 7.0,
          "score": 46,
          "time": 46.8667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805269,
          "mark": 9.0,
          "score": 51,
          "time": 35.1
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805273,
          "mark": null,
          "score": 42,
          "time": 45.85
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805273,
          "mark": 6.0,
          "score": 55,
          "time": 50.2667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805273,
          "mark": 5.5,
          "score": 49,
          "time": 34.4167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805277,
          "mark": null,
          "score": 29,
          "time": 34.1833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805277,
          "mark": 3.0,
          "score": 30,
          "time": 43.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805277,
          "mark": 3.0,
          "score": 24,
          "time": 24.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805277,
          "mark": 3.0,
          "score": 24,
          "time": 26.2333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805279,
          "mark": null,
          "score": 51,
          "time": 54.2
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805279,
          "mark": 4.0,
          "score": 40,
          "time": 45.6333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805279,
          "mark": 4.0,
          "score": 33,
          "time": 41.8167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805279,
          "mark": 5.0,
          "score": 48,
          "time": 44.9333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805280,
          "mark": null,
          "score": 38,
          "time": 55.9333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805280,
          "mark": 11.5,
          "score": 51,
          "time": 29.4833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805280,
          "mark": 13.0,
          "score": 61,
          "time": 38.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805280,
          "mark": 12.5,
          "score": 57,
          "time": 41.0333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805287,
          "mark": null,
          "score": 56,
          "time": 42.9167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805287,
          "mark": 9.5,
          "score": 71,
          "time": 39.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805287,
          "mark": 8.0,
          "score": 64,
          "time": 35.4
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805287,
          "mark": 10.5,
          "score": 74,
          "time": 34.2333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805288,
          "mark": null,
          "score": 42,
          "time": 38.3167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805288,
          "mark": 12.0,
          "score": 71,
          "time": 35.6833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805288,
          "mark": 12.0,
          "score": 71,
          "time": 46.3
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805288,
          "mark": 14.5,
          "score": 75,
          "time": 43.7667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805290,
          "mark": null,
          "score": 64,
          "time": 55.05
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805290,
          "mark": 10.0,
          "score": 78,
          "time": 53.8833
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805290,
          "mark": 8.5,
          "score": 71,
          "time": 38.6333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805290,
          "mark": 8.0,
          "score": 70,
          "time": 48.15
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805291,
          "mark": null,
          "score": 21,
          "time": 53.35
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805291,
          "mark": 3.0,
          "score": 30,
          "time": 35.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805291,
          "mark": 2.5,
          "score": 21,
          "time": 27.7667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805292,
          "mark": null,
          "score": 21,
          "time": 44.2667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805292,
          "mark": 7.0,
          "score": 41,
          "time": 35.6333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805292,
          "mark": 5.5,
          "score": 31,
          "time": 39.9667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805292,
          "mark": 7.0,
          "score": 38,
          "time": 36.9
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805293,
          "mark": null,
          "score": 16,
          "time": 33.85
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805293,
          "mark": 4.5,
          "score": 34,
          "time": 49.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805293,
          "mark": 3.5,
          "score": 24,
          "time": 38.3333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805293,
          "mark": 5.0,
          "score": 34,
          "time": 51.65
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3805296,
          "mark": null,
          "score": 32,
          "time": 55.8
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 7 janvier",
          "id": 3805296,
          "mark": 4.5,
          "score": 41,
          "time": 49.3
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3805296,
          "mark": 5.0,
          "score": 40,
          "time": 38.8333
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 3805296,
          "mark": 8.5,
          "score": 58,
          "time": 40.9667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 4218939,
          "mark": null,
          "score": 54,
          "time": 55.9167
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 4218939,
          "mark": 9.0,
          "score": 69,
          "time": 46.2
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 4218941,
          "mark": null,
          "score": 40,
          "time": 37.5667
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 4218941,
          "mark": 4.0,
          "score": 41,
          "time": 46.35
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 4218943,
          "mark": null,
          "score": 30,
          "time": 43.65
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation 1 avril",
          "id": 4218943,
          "mark": 3.0,
          "score": 31,
          "time": 48.1167
        }
      ]
    },
    {
      "id": 84579,
      "users": [
        {
          "id": 3890159,
          "fullName": faker.name.findName(),
          "time": 134,
          "score": { "sum": 140, "count": 364 },
          "initialLevel": { "sum": 102, "count": 140 },
          "initialEval": 73,
          "lastConnection": "2019-03-07",
          "connectionsNbr": 17,
          "lastModule": "Supérieur",
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 4614,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4624,
                "name":
                  "« on a, on en, on y » ou « on n'a, on n'en, on n'y » ?",
                "difficultyLevel": 25
              },
              {
                "id": 4623,
                "name": "« quoique » ou « quoi que » ?",
                "difficultyLevel": 24
              },
              {
                "id": 4640,
                "name": "« parti » ou « partie » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4627,
                "name": "« un » ou « une » espèce de ?",
                "difficultyLevel": 16
              }
            ],
            "known": [
              {
                "id": 4638,
                "name": "« -ions » ou « -iions » ? « -iez » ou « -iiez » ?",
                "difficultyLevel": 31
              },
              {
                "id": 4626,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 26
              },
              {
                "id": 4581,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4643,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 19
              },
              {
                "id": 4648,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 19
              }
            ]
          },
          "progData": [
            {
              "date": "2018-10-20",
              "sumscore": 75.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2018-10-26",
              "sumscore": 85.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-02-26",
              "sumscore": 106.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-02-28",
              "sumscore": 129.0,
              "moduleName": "Supérieur"
            },
            {
              "date": "2019-03-07",
              "sumscore": 140.0,
              "moduleName": "Supérieur"
            }
          ]
        }
      ],
      "insights": {
        "lastWeek": {
          "time": { "sum": 0, "sumd": 0 },
          "score": { "sum": 0, "sumd": 0 },
          "activeUsers": { "sum": 0, "sumd": 0 },
          "inactiveUsers": { "sum": 1, "sumd": 0 },
          "connections": [
            { "count": 0, "date": "2019-04-02" },
            { "count": 0, "date": "2019-04-03" },
            { "count": 0, "date": "2019-04-04" },
            { "count": 0, "date": "2019-04-05" },
            { "count": 0, "date": "2019-04-06" },
            { "count": 0, "date": "2019-04-07" },
            { "count": 0, "date": "2019-04-08" }
          ],
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 3086,
                "name":
                  "« on a, on en, on y » ou « on n'a, on n'en, on n'y » ?",
                "difficultyLevel": 25
              },
              {
                "id": 3062,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 25
              },
              {
                "id": 3085,
                "name": "« quoique » ou « quoi que » ?",
                "difficultyLevel": 24
              },
              {
                "id": 3105,
                "name": "« parti » ou « partie » ?",
                "difficultyLevel": 19
              },
              {
                "id": 3091,
                "name": "« un » ou « une » espèce de ?",
                "difficultyLevel": 16
              }
            ],
            "known": [
              {
                "id": 3102,
                "name": "« -ions » ou « -iions » ? « -iez » ou « -iiez » ?",
                "difficultyLevel": 31
              },
              {
                "id": 3090,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 26
              },
              {
                "id": 3108,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 19
              },
              {
                "id": 3114,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 19
              },
              {
                "id": 3024,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 19
              }
            ]
          },
          "topNUsers": {
            "score": [],
            "time": [{ "id": 3890159, "sum": { "sum": 0, "sumd": 0 } }],
            "help": [],
            "dropout": [{ "id": 3890159, "sum": { "sum": 0, "sumd": 0 } }]
          }
        },
        "lastMonth": {
          "time": { "sum": 0, "sumd": -1 },
          "score": { "sum": 0, "sumd": -55 },
          "activeUsers": { "sum": 0, "sumd": -1 },
          "inactiveUsers": { "sum": 1, "sumd": 1 },
          "connections": [
            { "count": 0, "date": "2019-03-10" },
            { "count": 0, "date": "2019-03-11" },
            { "count": 0, "date": "2019-03-12" },
            { "count": 0, "date": "2019-03-13" },
            { "count": 0, "date": "2019-03-14" },
            { "count": 0, "date": "2019-03-15" },
            { "count": 0, "date": "2019-03-16" },
            { "count": 0, "date": "2019-03-17" },
            { "count": 0, "date": "2019-03-18" },
            { "count": 0, "date": "2019-03-19" },
            { "count": 0, "date": "2019-03-20" },
            { "count": 0, "date": "2019-03-21" },
            { "count": 0, "date": "2019-03-22" },
            { "count": 0, "date": "2019-03-23" },
            { "count": 0, "date": "2019-03-24" },
            { "count": 0, "date": "2019-03-25" },
            { "count": 0, "date": "2019-03-26" },
            { "count": 0, "date": "2019-03-27" },
            { "count": 0, "date": "2019-03-28" },
            { "count": 0, "date": "2019-03-29" },
            { "count": 0, "date": "2019-03-30" },
            { "count": 0, "date": "2019-03-31" },
            { "count": 0, "date": "2019-04-01" },
            { "count": 0, "date": "2019-04-02" },
            { "count": 0, "date": "2019-04-03" },
            { "count": 0, "date": "2019-04-04" },
            { "count": 0, "date": "2019-04-05" },
            { "count": 0, "date": "2019-04-06" },
            { "count": 0, "date": "2019-04-07" },
            { "count": 0, "date": "2019-04-08" }
          ],
          "topNRules": {
            "focused": [],
            "acquired": [
              {
                "id": 3086,
                "name":
                  "« on a, on en, on y » ou « on n'a, on n'en, on n'y » ?",
                "difficultyLevel": 25
              },
              {
                "id": 3062,
                "name": "« va-t-en » ou « va-t'en » ?",
                "difficultyLevel": 25
              },
              {
                "id": 3085,
                "name": "« quoique » ou « quoi que » ?",
                "difficultyLevel": 24
              },
              {
                "id": 3105,
                "name": "« parti » ou « partie » ?",
                "difficultyLevel": 19
              },
              {
                "id": 3091,
                "name": "« un » ou « une » espèce de ?",
                "difficultyLevel": 16
              }
            ],
            "known": [
              {
                "id": 3102,
                "name": "« -ions » ou « -iions » ? « -iez » ou « -iiez » ?",
                "difficultyLevel": 31
              },
              {
                "id": 3090,
                "name":
                  "« je concluerai » ou « je conclurai » ? « je concluerais » ou « je conclurais » ?",
                "difficultyLevel": 26
              },
              {
                "id": 3108,
                "name": "des maillots « orange » ou « oranges » ?",
                "difficultyLevel": 19
              },
              {
                "id": 3114,
                "name":
                  "« moi qui fais » ou « moi qui fait » ? « toi qui mange » ou « toi qui manges » ?",
                "difficultyLevel": 19
              },
              {
                "id": 3024,
                "name": "« parce que » ou « par ce que » ?",
                "difficultyLevel": 19
              }
            ]
          },
          "topNUsers": {
            "score": [],
            "time": [{ "id": 3890159, "sum": { "sum": 0, "sumd": -92 } }],
            "help": [],
            "dropout": [{ "id": 3890159, "sum": { "sum": 0, "sumd": -92 } }]
          }
        }
      },
      "modules": [
        {
          "key": "Pro",
          "index": 0,
          "nbrOfRules": 84,
          "routeId": 62,
          "productId": 55
        },
        {
          "key": "Pont supérieur",
          "index": 1,
          "nbrOfRules": 56,
          "routeId": 62,
          "productId": 56
        },
        {
          "key": "Orthotypographie",
          "index": 2,
          "nbrOfRules": 24,
          "routeId": 62,
          "productId": 57
        },
        {
          "key": "Excellence",
          "index": 3,
          "nbrOfRules": 200,
          "routeId": 62,
          "productId": 71
        },
        {
          "key": "Supérieur",
          "index": 0,
          "nbrOfRules": 140,
          "routeId": 68,
          "productId": 53
        },
        {
          "key": "Orthotypographie",
          "index": 2,
          "nbrOfRules": 24,
          "routeId": 68,
          "productId": 57
        },
        {
          "key": "Excellence",
          "index": 3,
          "nbrOfRules": 200,
          "routeId": 68,
          "productId": 71
        }
      ],
      "evaluations": [
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Évaluation initiale",
          "id": 3890159,
          "mark": null,
          "score": 73,
          "time": 27.0
        },
        {
          "fullName": faker.name.findName(),
          "evaluationName": "Evaluation février",
          "id": 3890159,
          "mark": 7.0,
          "score": 72,
          "time": 20.0167
        }
      ]
    }
  ]
  }
  return data;
}