// import { TestBed, async, inject } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { RegisterProfileAuthGuard } from './register-profile-auth.guard';
// import { AuthService } from './auth.service';

// describe('RegisterProfileAuthGuard', () => {
//   let guard: RegisterProfileAuthGuard;
//   let authServiceSpy: jasmine.SpyObj<AuthService>;

//   beforeEach(() => {
//     const spy = jasmine.createSpyObj('AuthService', ['isUserLoggedIn']);

//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule],
//       providers: [
//         RegisterProfileAuthGuard,
//         { provide: AuthService, useValue: spy }
//       ]
//     });

//     guard = TestBed.inject(RegisterProfileAuthGuard);
//     authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
//   });

//   it('should be created', () => {
//     expect(guard).toBeTruthy();
//   });

//   it('should allow access when user is authenticated', () => {
//     authServiceSpy.isUserLoggedIn.and.returnValue(true);

//     const result = guard.canActivate(null!, null!);

//     expect(result).toBe(true);
//   });

//   it('should navigate to login page when user is not authenticated', () => {
//     authServiceSpy.isUserLoggedIn.and.returnValue(false);

//     const router = TestBed.inject(RouterTestingModule);
//     const navigateSpy = spyOn(router, 'navigate');

//     const result = guard.canActivate(null!, null!);

//     expect(result).toBe(false);
//     expect(navigateSpy).toHaveBeenCalledWith(['/login'], {
//       queryParams: { returnUrl: null }
//     });
//   });
// });
