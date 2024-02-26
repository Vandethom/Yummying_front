<template>
    <div class="aboutInformations">
        <div>
            <h3>INFORMATIONS UTILES</h3>
            <div class="infoElement">
                <img src="../../assets/pin.svg" alt="Pin Icon" class="icon">
                <p>59 rue Imaginée <br /> 92170 Nanterre-sur-Seine</p>
            </div>
            <hr>
            <div class="infoElement">
                <img src="../../assets/phone.svg" alt="Phone Icon" class="icon">
                <p>05 41 98 27 13</p>
            </div>
            <hr>
            <div class="infoElement">
                <img src="../../assets/clock.svg" alt="Clock Icon" class="icon">
                <p>Ouvert du mardi au samedi</p>
            </div>
            <hr>
            <div class="infoElement">
                <img src="../../assets/price.svg" alt="Price Icon" class="icon">
                <p>Déplacement gratuit à partir de 40€</p>
            </div>
            <hr>
            <div class="infoElement">
                <img src="../../assets/bike.svg" alt="Bike Icon" class="icon">
                <p>Plats disponibles à emporter</p>
            </div>
        </div>
        <div>
            <table>
                <tr>
                    <th class="tableHead">Zone</th>
                </tr>
                <tr>
                    <td class="tableHead">Ville</td>
                    <td class="tableHead">CP</td>
                    <td class="tableHead">Prix</td>
                </tr>
                <tr>
                    <td>Paris</td>
                    <td>75000</td>
                    <td>14€</td>
                </tr>
                <tr>
                    <td>Versailles</td>
                    <td>78000</td>
                    <td>16€</td>
                </tr>
                <tr>
                    <td>Montreuil</td>
                    <td>93100</td>
                    <td>19€</td>
                </tr>
                <tr>
                    <td>Autres</td>
                    <td> - - - </td>
                    <td>20€</td>
                </tr>
            </table>
        </div>
    </div>
</template>
  
  
<script>
  export default {
      name: 'AboutInformations',
  }
</script>
  
<style lang="scss">
    .aboutInformations {
        display: flex;
        justify-content: space-evenly;
        margin-top: 45px;

        .infoElement {
            display: flex;
            text-align: center;

            .icon {
                margin-right: 16px;
                width: 40px;
                height: 40px;
            }
        }

        h3, p, table {
            color: black;
            text-align: left;
            margin-top: 0;
            margin-bottom: 25px;
        }

        table {
            border-collapse: collapse;
            
            .tableHead {
                font-weight: bold;
            }

            td {
                margin-top: 40px;
                border: 1px solid rgba($color: #000000, $alpha: 0.5);
                padding: 12px;
            }
        }
    }
</style>