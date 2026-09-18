import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'bfrodsham.github.io' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bfrodsham.github.io');
  });

  it('should render starter text', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const githubLink = compiled.querySelector('a');
    expect(compiled.querySelector('h1')?.textContent).toContain('bfrodsham.github.io');
    expect(compiled.querySelector('p')?.textContent).toContain('A very basic Angular UI to get started.');
    expect(githubLink?.getAttribute('href')).toBe('https://github.com/bfrodsham');
    expect(githubLink?.getAttribute('target')).toBe('_blank');
    expect(githubLink?.getAttribute('rel')).toContain('noopener');
    expect(githubLink?.getAttribute('rel')).toContain('noreferrer');
  });
});
