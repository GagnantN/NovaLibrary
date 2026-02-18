from pydantic import BaseModel

class LivreBase(BaseModel):
    titre: str
    auteur: str
    genre: str

class LivreCreate(LivreBase):
    pass

class Livre(LivreBase):
    id: int

    class Config:
        from_attributes = True
