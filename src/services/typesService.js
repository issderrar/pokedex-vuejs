class TypesService {

    getTypes() {
        return ["normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark"];
    }

    getTypesOrder() {
        return {
            normal: 0,
            fire: 1,
            water: 2,
            electric: 3,
            grass: 4,
            ice: 5,
            fighting: 6,
            poison: 7,
            ground: 8,
            flying: 9,
            psychic: 10,
            bug: 11,
            rock: 12,
            ghost: 13,
            dragon: 14,
        };
    }

    getTypesChart() {
        return {
            normal: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1],
            fire: [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1],
            water: [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1],
            electric: [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1],
            grass: [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1],
            ice: [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1],
            fighting: [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2],
            poison: [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1],
            ground: [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1],
            flying: [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1],
            psychic: [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0],
            bug: [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2],
            rock: [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1],
            ghost: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5],
            dragon: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
            dark: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5],
            steel: [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1]
        };
    }

    /*    getTypesChart() {
            return {
                normal: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5],
                fire: [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2],
                water: [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1],
                electric: [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1],
                grass: [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5],
                ice: [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5],
                fighting: [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2],
                poison: [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0],
                ground: [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2],
                flying: [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5],
                psychic: [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5],
                bug: [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5],
                rock: [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5],
                ghost: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 0.5],
                dragon: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5],
                dark: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 0.5],
                steel: [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5]
            };
        }*/

    getTeamTypes(team) {
        let types = []
        team.forEach((element) => {
            types.push(element.type1)
            if (element.type2) {
                types.push(element.type2)
            }
        })

        return types
    }

    getTeamNumberPerTypes(team) {
        let types = this.getTeamTypes(team)
        let counts = {};

        for (let i = 0; i < types.length; i++) {
            if (types[i] in counts) {
                counts[types[i]] += 1
            } else {
                counts[types[i]] = 1
            }
        }
        return counts
    }

    getTeamTypesAnalysis(team) {
        let types = this.getTeamTypes(team)
        let tempResults = {}
        for (let i = 0; i <= types.length - 1; i++) {
            if (i === 0) {
                tempResults = this.getTypesChart()[types[i].toLowerCase()]
            } else  {
                for (let j = 0; j <= tempResults.length-1; j++) {
                    tempResults[j] += this.getTypesChart()[types[i].toLowerCase()][j]
                }
            }
        }
        let results = {}
        for (let i = 0; i < tempResults.length-1; i++) {
            results[this.getTypes()[i]] = tempResults[i]/ this.getTeamTypes(team).length;
        }
        return results
    }

    getWeaknesses(team) {
        let results = this.getTeamTypesAnalysis(team)
        let weaknesses = []
        for (const type in results) {
            if (results[type] <= (1 - (0.5 / ((team.length / 2) +1)) ) ) {
                weaknesses.push(type)
            }
        }
        console.log(this.getTeamTypesAnalysis(team))
        return weaknesses
    }

    getStrengths(team) {
        let results = this.getTeamTypesAnalysis(team)
        let strengths = []
        for (const type in results) {
            if (results[type] >= (1 + (0.5 / ((team.length / 2) +1))) ) {
                strengths.push(type)
            }
        }
        return strengths
    }

    getTeamEffectiveness(team) {
        return {"strengths" : this.getStrengths(team), "weaknesses" : this.getWeaknesses(team)}
    }
}

export const typesService = new TypesService()




