#pragma once

#include "ICharacter.h"

class Reproduction
{
public:
	// method for crossover kittens
	static genotype crossover(const genotype& firstParentGenotype, const genotype& secondParentGenotype) noexcept
	{
		genotype childGenotype;
		auto childGenotypeIt = childGenotype.begin();
		for (auto firstParentGenotypeIt = firstParentGenotype.cbegin(),
			secondParentGenotypeIt = secondParentGenotype.cbegin();
			childGenotypeIt != childGenotype.end();
			++firstParentGenotypeIt, ++secondParentGenotypeIt, ++childGenotypeIt)
		{
			(mersenne() % 2) ? (*childGenotypeIt).firstGene = (*firstParentGenotypeIt).firstGene : (*secondParentGenotypeIt).firstGene;
			(mersenne() % 2) ? (*childGenotypeIt).secondGene = (*secondParentGenotypeIt).secondGene : (*firstParentGenotypeIt).secondGene;

			mutate(*childGenotypeIt);
		}
		return childGenotype;
	}

private:
	// method for mutations of genes
	static void mutate(Chromosome& chromosome) noexcept
	{
		static constexpr int mutationProbability = 1; // 1 per sent

		if (mersenne() <= mersenne.max() * mutationProbability / 100)
			(chromosome.firstGene == GeneState::Dominant)
			? chromosome.firstGene = GeneState::Recessive : chromosome.firstGene = GeneState::Dominant;
		if (mersenne() <= mersenne.max() * mutationProbability / 100)
			(chromosome.secondGene == GeneState::Dominant)
			? chromosome.secondGene = GeneState::Recessive : chromosome.secondGene = GeneState::Dominant;
	}


	Reproduction() = delete;
	~Reproduction() = delete;
	Reproduction(Reproduction&) = delete;
	Reproduction(Reproduction&&) = delete;
	void operator= (const Reproduction&) = delete;
	void operator= (const Reproduction&&) = delete;
};
