from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import SessionLocal
from .. import crud, schemas

router = APIRouter(prefix="/livres", tags=["Livres"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=schemas.Livre)
def create_livre(livre: schemas.LivreCreate, db: Session = Depends(get_db)):
    return crud.create_livre(db, livre)

@router.get("/", response_model=list[schemas.Livre])
def read_livres(db: Session = Depends(get_db)):
    return crud.get_livres(db)
