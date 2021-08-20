#pragma once
#include <iostream>

#include "Chromosome.h"
#include "Genotype.h"
#include "Phenotype.h"
#include "Statistics.h"
#include "Mask.h"

void printGenotype(Genotype& genotype) noexcept
{
	for (auto genotypeIt = genotype.setOfGenes.cbegin(); genotypeIt != genotype.setOfGenes.cend(); ++genotypeIt)
	{
		std::cout << static_cast<uint16_t>(genotypeIt->firstGene)
			<< static_cast<uint16_t>(genotypeIt->secondGene) << ' ';
	}
}

void printPhenotype(const Phenotype& phenotype) noexcept
{
	for (auto phenotypeIt = phenotype.setOfSigns.cbegin(); phenotypeIt != phenotype.setOfSigns.cend(); ++phenotypeIt)
	{
		std::cout << phenotypeIt->first << phenotypeIt->second << '\n';
	}
}

void printGeneralSignProbability(const genotype& genotype, const PhenotypeMask& mask) noexcept
{
	Statistics st(mask);
	auto signsExpressionProbability = st.getGeneralSignsExpressionProbability(genotype);
	for (auto signIt = signsExpressionProbability.cbegin(); signIt != signsExpressionProbability.cend(); ++signIt)
	{
		std::cout << signIt->first << "\n";
		for (auto signProbabilityIt = signIt->second.cbegin(); signProbabilityIt != signIt->second.cend(); ++signProbabilityIt)
		{
			std::cout << signProbabilityIt->first << " - " << signProbabilityIt->second << '\n';
		}
		std::cout << "\n";
	}
}

void printChildSignProbability(const genotype& firstParentGenotype, const genotype& secondParentGenotype, const PhenotypeMask& mask) noexcept
{
	Statistics st(mask);
	auto signsExpressionProbability = st.getChildSignsExpressionProbability(firstParentGenotype, secondParentGenotype);
	for (auto signIt = signsExpressionProbability.cbegin(); signIt != signsExpressionProbability.cend(); ++signIt)
	{
		std::cout << signIt->first << "\n";
		for (auto signProbabilityIt = signIt->second.cbegin(); signProbabilityIt != signIt->second.cend(); ++signProbabilityIt)
		{
			std::cout << signProbabilityIt->first << " - " << signProbabilityIt->second << '\n';
		}
		std::cout << "\n";
	}
}
