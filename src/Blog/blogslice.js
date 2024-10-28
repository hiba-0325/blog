import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        posts: [],
        blogDetails:"",
    },
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        select:(state,action)=>{
           state.blogDetails= state.posts.find((blog)=> blog.id === action.payload);

        }
    },
});

export const { addPost,select } = blogSlice.actions;
export default blogSlice.reducer;
