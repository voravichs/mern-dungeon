import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_SINGLE_USER } from '../../utils/queries';

import CharacterList from '../CharacterList'

export default function Profile() {
    const { username } = useParams();
    const { loading, data } = useQuery(GET_SINGLE_USER, {
        variables: { username: username },
    });
    const characters = data?.singleUser.savedChars || [];
    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <CharacterList characters={characters} />
            )}
        </div>
    );
}
