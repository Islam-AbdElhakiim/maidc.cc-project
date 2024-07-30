import { AppInlinePaddingDirective } from './app-padding.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Renderer2, ElementRef } from '@angular/core';

@Component({
  template: `<div appPadding="20px"></div>`
})
class TestComponent {}

describe('AppInlinePaddingDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppInlinePaddingDirective, TestComponent]
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create an instance', () => {
    const directive = new AppInlinePaddingDirective(fixture.componentRef.injector.get(ElementRef), fixture.componentRef.injector.get(Renderer2));
    expect(directive).toBeTruthy();
  });

  it('should apply padding to the element', () => {
    const debugElement = fixture.debugElement.query(By.directive(AppInlinePaddingDirective));
    const divElement: HTMLElement = debugElement.nativeElement;

    expect(divElement.style.padding).toBe('20px');
  });
});
