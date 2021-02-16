import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';

@Component({
	selector: 'srt-editor',
	templateUrl: './rich-text-editor.component.html',
	styleUrls: [ './rich-text-editor.component.scss' ]
})
export class RichTextEditorComponent implements OnInit {
	formatButtons = [
		{
			command: 'bold',
			icon: 'fas fa-bold'
		},
		{
			command: 'italic',
			icon: 'fas fa-italic'
		},
		{
			command: 'insertunorderedlist',
			icon: 'fas fa-list-ul'
		},
		{
			command: 'justifyleft',
			icon: 'fas fa-align-left'
		},
		{
			command: 'justifycenter',
			icon: 'fas fa-align-center'
		},
		{
			command: 'justifyright',
			icon: 'fas fa-align-right'
		}
	];
	@ViewChild('editor') editor!: ElementRef;
	@Output() outputRichText = new EventEmitter<string>();
	constructor(@Inject(DOCUMENT) private document: Document) {}

	ngOnInit(): void {}

	format(style: string) {
		this.document.execCommand(style, false);
	}

	insertUrl(fieldUrl: HTMLInputElement, type = 'link') {
		const url = fieldUrl.value;
		const selectedText = this.document.getSelection();
		const htmlOutput: { [key: string]: string } = {
			link: `<a href="${url}" target="_blank">${selectedText}</a>`,
			image: `<img src="${url}" />`
		};
		fieldUrl.value = '';
		document.execCommand('insertHTML', false, htmlOutput[type]);
	}

	output() {
		this.outputRichText.emit(this.editor.nativeElement.innerHTML);
	}
}
