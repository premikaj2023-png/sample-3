## 🚀 Quick Start for Team Members

Follow these steps to get the environment running on your machine:

1. **Clone the Repo:**
   `git clone <your-repo-url>`

2. **Set up Environment Variables:**
   Copy the example file to create your local `.env`:
   `cp .env.example .env`
   *(Then, open .env and add your OpenAI API Key)*

3. **Install Dependencies (from the Root):**
   `npm install`

4. **Launch the Infrastructure:**
   `docker-compose up -d`
   *(This starts the Database and Backend in the background)*

5. **Start Developing:**
   `npm run dev`
   *(Turbo will launch all frontend apps simultaneously)*