import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // Método para salvar um item no localStorage
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Método para obter um item do localStorage
  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  // Método para remover um item do localStorage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Método para limpar todo o localStorage
  clear(): void {
    localStorage.clear();
  }
}
