<!-- App architecture -->
# Client 
- The app will have two types of state 
- 1. Universal State (Redux store)
- 2. Local State 
    - State is contained within a component and not shared with other components 

# Features
## BackLog
- Authentication
- 1. `14/08/2022`
    - At a later stage implement federated signup and signin for fb, google and apple. For now, just focus on standard auth 
- 2. `16/08/2022`
    - When calling routes client side refer to step 5 in below resource 
        - `https://vivek-kaushal.medium.com/deploying-a-mern-web-app-to-heroku-b12c74c8b3c4`
## Ready for development
- `SPRINT_01 - Authentication`
- `TICKET 001 - SIGNUP 21/08/2022` ***Ticket complete 28/08/2022
    - Form validation on signup - complete 
    - Handle form submission - `23/08/ - Complete`
        - 21/08/2022
            - signup function created and connected to SignUp form 
            - `Tasks`
                - Have a look at RoboFriends app for more examples on redux 
                - signup function must be wired via redux 
                - The state for authentication 
                    - auth : {
                        token: JWT
                    }
        - 22/08/2022
            - Redux signup action set up. However, a cors issue returns. 
                - Test the signup function without redux and see if issue still persists. 
            - `23/08/`
                - Update 
                    - Was not a cors issue but a bad request 
                    - Bug resolved 
        - `24/08/`
            - actions/auth/loadUser(f)
                - This function must be run inside Admin and Auth Layout 
                    - then check location 
                        - if includes admin and no token redirect to auth signin  
    - Protect Admin Route 
        - complete 24/08/
    - Handle form submission success/errors  `28/08 Complete`
        - For example bring in errors from server. Create redux state for it
        - Display errors on form
            - some initial logic set up for this via alert state. 
        - Display success and redirect to dash (For now)

        - `28/08 - UPDATE`
            - Err on signUp displays immediately 

            - Todo still 
                - 1. Auto scroll to top of signup on signUp error (a ref is needed)
                    - Done 28/08
                - 2. Redirect to Dash on signUp 
                    - Done 28/08/
                - 3. SignUp success feedback and dash (for now)
                    - Done 28/08/
- `TICKET 002 - SIGNIN 21/08/2022`
    - Form validation on signup - WIP
    - Handle form submission - WIP
    - Handle form submission success/errors - WIP 
        - Display errors on form
        - Display success and redirect to dash (For now)

- `TICKET 003 - Protect Admin routes 21/08/2022`
    - Before implementing any new features (`25/08/ - Done`)
        - Make admin routes protected 

## In Development
- `TICKET 001 - SIGNUP 21/08/2022`
- `NOTE! - VERY IMPORTANT`
    - Do this before developing further
        - Deploy to Heroku and set up a deployment pipeline with github actions 

    - `20/08/2022`
        - Update on deployment 
            - Backend successfully deployed to Heroku
                - Auto deployment on github push active 
            - Frontend successfully deployed to Netlify 
                - Auto deployment on github push active  
- Authentication
- 1. `14/08/2022` The state contained inside the React hook form does not necessarily be part of universal state (Redux store). However, if a feature is needed where the user's log in attempts need to be limited then form state will have to be universal or at least communicate with universal state via an action ("state updating" helper function)
    - `Recommendation`
        - Start with local form validation then move out to universal state as needed 
    - `14/08/2022 - Completed thus far`
    - Form validation on SignUp inputs and unit tests for SignUp 
## Complete
 
# Bugs
## BackLog
## Ready for development
## In Development 
## Complete

# Chores
## BackLog
`23/08/ - Authentication`
- Change the token storage from Local to session 
    - This will ensure that when a user closes window that session storage will be cleared 
        - Better for security purposes 
    - Session storage can also be timed to expire   
## Ready for development
## In Development 
## Complete