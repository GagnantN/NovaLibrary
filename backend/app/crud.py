from sqlalchemy.orm import Session
from . import models, schemas

def create_livre(db: Session, livre: schemas.LivreCreate):
    db_livre = models.Livre(**livre.dict())
    db.add(db_livre)
    db.commit()
    db.refresh(db_livre)
    return db_livre

def get_livres(db: Session):
    return db.query(models.Livre).all()
