# 🔹 Clean Architure project
  ```sh
src/
├─app/
│ ├─ [locale]        ├─ (auth)
│ ├─ not-found.tsx   ├─ (public)
│                    ├─ (dashboard)
│                    
│  ├─ 
├─ app/ globals.css            Global styles take design system and convert to utilites                                   
|
├─assets /                                 # Static assets
│  ├─ images/
│  │  └─ images.tsx                        # import and export all images in this file
│  ├─ Lottie/                              # all images lottie files 
│  │  └─ loading.json
│  │  └─ No-Data.json
│  └─ icons/
│     └─ icons.tsx                          # import and export all icons in this file

├─animations/
│ ├─ Reveal.ts
│ ├─ Floating.ts

├─ components/                             # Reusable UI Components (Atomic Design)
│  ├─ atoms/                               # Smallest elements
│  │  ├─ Images.tsx
│  │  ├─ Input.tsx
│  │  ├─ Text.tsx
│  │  └─ Title.tsx
│  ├─ molecules/                           # Combination of atoms
│  │     ├─ SearchBar.tsx
│  ├─ organisms/                           # Larger sections
│  │  ├─ Navbar.tsx
│  │  ├─ Sidebar.tsx
│  │  └─ Footer.tsx
│  ├─ templates/                           # Page-level structures
│  │  ├─ AuthLayout.tsx
│  │  └─ DashboardLayout.tsx
│  │  └─ publicLayout.tsx
│                         
├─ lib/
│   ├─ cn.ts  # incude tailwind-merge ,  clsx, type ClassValue
├─ styles/                            
│  └─ variables.css                         # file for design system form figma
│                  
├─ modules/                               # Feature-based modules (MCV)
│  ├─ auth/
│  │  ├─ api/                             # EndPoint
│  │  │  ├─ loginApi.ts
│  │  │  └─ registerApi.ts
│  │  ├─ components/                      # JSX
│  │  │  ├─ LoginForm.tsx
│  │  │  └─ RegisterForm.tsx
│  │  ├─ hooks/                            # Hook React Query ( useApiMutation.ts , useApiQuery.ts )
│  │  │  └─ uselogin.tsx              
│  │  │  └─ useRegister.tsx                
│  │  │ 
│  │  │
│  │  ├─ utils/
│  │  │  └─ authValidators.ts
│  │  ├─ types/            # types for features 
│  │
│  ├─ Landing/              # landing pages
│  └─ Dashboard/            # dashboard pages 

├─ services/                                # API clients layer
│  ├─ axiosConfig.ts                        # inculde axios , tokens
│  ├─ apiClient.ts                          # inculde method ( get , post ) and Errors Handling 
│  ├─ tokenService.ts                       # inculde tokens

├─ utils/                                
│  ├─ constants.ts
│  ├─ data.tx                            # data for loop with map 
│  ├─ index.tx
│  ├─ routes.tsx                         # routes in navbar

├─ config/                                  
│  ├─ env.ts  # PROJECT INFO ,  API CONFIG , AUTH CONFIG
│  └─ .env    # some env.ts but for esay imports

├─ hooks/ 
│  ├─ useApiQuery.ts           # hook Query
│  ├─ useApiMutation.ts        # hook Mutation
|  ├─ index.ts

├─ types/
│  ├─ api.d.ts        # global types in project 
│  ├─ global.d.ts
│

├─ core/
│  ├─ ui-state ├─ EmptyState.tsx
│              ├─ LoadingState.tsx
│              ├─ NotFoundState.tsx
│ 
│  ├─ seo      ├─ seo.config.ts
│              ├─ Seo.tsx
│              ├─ seo.types.ts
│              ├─ useSeo.ts
├─ guard/
│  ├─ ProtectedRoute.tsx
├─ i18n/
│  ├─ index.ts
