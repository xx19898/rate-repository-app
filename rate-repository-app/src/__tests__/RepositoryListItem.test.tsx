import {render, screen, fireEvent} from '@testing-library/react-native';
import * as React from 'react'
import { RepositoryList } from '../components/RepoVisualisation/RepositoryList';
import {within} from '@testing-library/react-native'

    describe('RepositoryListContainer', () => {
      it('renders repository information correctly', async () => {
        const repositories = {
          totalCount: 8,
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        };
        const repositoryNodes = repositories.edges.map((edge) => edge.node)

        render(<RepositoryList repositories={repositoryNodes}/>)

        const [repositoryOne,repositoryTwo] = screen.getAllByTestId('repositoryItem')


        const descriptionOne = within(repositoryOne).getByText('Build forms in React, without the tears')
        expect(descriptionOne).toBeDefined()

        const langOne = within(repositoryOne).getByText('TypeScript')
        expect(langOne).toBeDefined()

        const nameOne = within(repositoryOne).getByText('jaredpalmer/formik')
        expect(nameOne).toBeDefined()

        const starsOne = within(repositoryOne).getByText('21.9k')
        expect(starsOne).toBeDefined()

        const forksOne = within(repositoryOne).getByText('1.6k')
        expect(forksOne).toBeDefined()

        const reviewsOne = within(repositoryOne).getByText('3')
        expect(reviewsOne).toBeDefined()

        const ratingOne = within(repositoryOne).getByText('88')
        expect(ratingOne).toBeDefined()




        const langTwo = within(repositoryTwo).getByText('JavaScript')
        expect(langOne).toBeDefined()

        const descriptionTwo = within(repositoryTwo).getByText('Flexible promise-based React data loader')
        expect(descriptionTwo).toBeDefined()

        const nameTwo = within(repositoryTwo).getByText('async-library/react-async')
        expect(nameOne).toBeDefined()

        const starsTwo = within(repositoryTwo).getByText('1.8k')
        expect(starsOne).toBeDefined()

        const forksTwo = within(repositoryTwo).getByText('0.1k')
        expect(forksOne).toBeDefined()

        const reviewsTwo = within(repositoryTwo).getByText('3')
        expect(reviewsOne).toBeDefined()

        const ratingTwo = within(repositoryTwo).getByText('72')
        expect(ratingOne).toBeDefined()


      });
    });