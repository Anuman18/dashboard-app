from sqlmodel import Field, SQLModel
from typing import Optional
from pydantic import EmailStr

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    email: EmailStr
    hashed_password: str
