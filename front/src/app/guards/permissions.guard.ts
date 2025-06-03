import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export const permissionGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return JSON.parse(localStorage.getItem('permissions')).includes(route.data.permission) ? true : false;
}

export const permissionTemplateGuard = (name : string) => {
  return JSON.parse(localStorage.getItem('permissions')).includes(name) ? true : false;
}
