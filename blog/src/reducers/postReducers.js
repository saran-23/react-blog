export default (state=[],action) => {
        switch (action.type) {  // if action.type = case 'fetch_posts
            case 'FETCH_POSTS':
                return action.payload;

        }
};