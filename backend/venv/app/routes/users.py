from fastapi import APIRouter, HTTPException, Depends
from sqlmodel import Session, select
from app.models import User
from app.database import get_session
from app.auth import hash_password, verify_password, create_access_token

router = APIRouter(prefix="/users", tags=["Users"])

@router.post("/register")
def register(name: str, email: str, password: str, session: Session = Depends(get_session)):
    existing = session.exec(select(User).where(User.email == email)).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    user = User(name=name, email=email, hashed_password=hash_password(password))
    session.add(user)
    session.commit()
    session.refresh(user)
    return {"message": "User created", "user": user}

@router.post("/login")
def login(email: str, password: str, session: Session = Depends(get_session)):
    user = session.exec(select(User).where(User.email == email)).first()
    if not user or not verify_password(password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    token = create_access_token(data={"sub": user.email})
    return {"access_token": token, "token_type": "bearer"}
