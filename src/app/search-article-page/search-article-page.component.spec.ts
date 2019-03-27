import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchArticlePageComponent } from './search-article-page.component';

describe('SearchArticlePageComponent', () => {
  let component: SearchArticlePageComponent;
  let fixture: ComponentFixture<SearchArticlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchArticlePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
