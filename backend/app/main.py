from fastapi import FastAPI
from .database import engine
from .models import Base
from .routers import livres

# Crée les tables si elles n'existent pas
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Nova Library API 🚀")

# Inclure les routers
app.include_router(livres.router)

@app.get("/")
def root():
    return {"message": "Backend Nova Library fonctionne 🚀"}
